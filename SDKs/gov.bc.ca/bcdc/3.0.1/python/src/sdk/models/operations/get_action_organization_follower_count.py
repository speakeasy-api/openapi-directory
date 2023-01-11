import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationFollowerCountQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationFollowerCountRequest:
    query_params: GetActionOrganizationFollowerCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationFollowerCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
