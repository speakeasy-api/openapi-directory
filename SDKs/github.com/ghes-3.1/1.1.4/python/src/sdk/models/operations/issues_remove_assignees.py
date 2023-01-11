import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import issue_simple as shared_issue_simple


@dataclasses.dataclass
class IssuesRemoveAssigneesPathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class IssuesRemoveAssigneesRequestBody:
    assignees: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    

@dataclasses.dataclass
class IssuesRemoveAssigneesRequest:
    path_params: IssuesRemoveAssigneesPathParams = dataclasses.field()
    request: Optional[IssuesRemoveAssigneesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IssuesRemoveAssigneesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    issue_simple: Optional[shared_issue_simple.IssueSimple] = dataclasses.field(default=None)
    
