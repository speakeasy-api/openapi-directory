import dataclasses
from typing import Optional
from ..shared import memberelectioneditrequest as shared_memberelectioneditrequest
from ..shared import memberelectionresult as shared_memberelectionresult


@dataclasses.dataclass
class EditMemberElectionPathParams:
    member_election_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_election_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditMemberElectionRequest:
    path_params: EditMemberElectionPathParams = dataclasses.field()
    request: shared_memberelectioneditrequest.MemberElectionEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditMemberElectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    member_election_result: Optional[shared_memberelectionresult.MemberElectionResult] = dataclasses.field(default=None)
    
