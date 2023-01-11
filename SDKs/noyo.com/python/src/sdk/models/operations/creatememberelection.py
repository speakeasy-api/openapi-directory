import dataclasses
from typing import Optional
from ..shared import memberelectioncreaterequest as shared_memberelectioncreaterequest
from ..shared import memberelectionresult as shared_memberelectionresult


@dataclasses.dataclass
class CreateMemberElectionPathParams:
    plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMemberElectionRequest:
    path_params: CreateMemberElectionPathParams = dataclasses.field()
    request: shared_memberelectioncreaterequest.MemberElectionCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMemberElectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    member_election_result: Optional[shared_memberelectionresult.MemberElectionResult] = dataclasses.field(default=None)
    
