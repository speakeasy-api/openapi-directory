import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order_enum as shared_order_enum
from ..shared import repo_search_result_item as shared_repo_search_result_item
from ..shared import validation_error as shared_validation_error

class SearchReposSortEnum(str, Enum):
    STARS = "stars"
    FORKS = "forks"
    HELP_WANTED_ISSUES = "help-wanted-issues"
    UPDATED = "updated"


@dataclasses.dataclass
class SearchReposQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[SearchReposSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchRepos200ApplicationJSON:
    incomplete_results: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: list[shared_repo_search_result_item.RepoSearchResultItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclasses.dataclass
class SearchRepos503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SearchReposRequest:
    query_params: SearchReposQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchReposResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_repos_200_application_json_object: Optional[SearchRepos200ApplicationJSON] = dataclasses.field(default=None)
    search_repos_503_application_json_object: Optional[SearchRepos503ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
