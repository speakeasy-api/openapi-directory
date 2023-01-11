import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status_enum1 as shared_status_enum1
from ..shared import status_enum as shared_status_enum
from ..shared import check_run as shared_check_run


@dataclasses.dataclass
class ChecksListForRefPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChecksListForRefQueryParams:
    app_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    check_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'check_name', 'style': 'form', 'explode': True }})
    filter: Optional[shared_status_enum1.StatusEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksListForRef200ApplicationJSON:
    check_runs: list[shared_check_run.CheckRun] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_runs') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ChecksListForRefRequest:
    path_params: ChecksListForRefPathParams = dataclasses.field()
    query_params: ChecksListForRefQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ChecksListForRefResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    checks_list_for_ref_200_application_json_object: Optional[ChecksListForRef200ApplicationJSON] = dataclasses.field(default=None)
    
