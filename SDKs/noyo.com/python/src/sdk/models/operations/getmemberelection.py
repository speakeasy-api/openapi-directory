import dataclasses
from typing import Optional
from ..shared import memberelectionresult as shared_memberelectionresult


@dataclasses.dataclass
class GetMemberElectionPathParams:
    member_election_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_election_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMemberElectionRequest:
    path_params: GetMemberElectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMemberElectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    member_election_result: Optional[shared_memberelectionresult.MemberElectionResult] = dataclasses.field(default=None)
    
