import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationShowQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_datasets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_datasets', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationShowRequest:
    query_params: GetActionOrganizationShowQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
