import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionPackageShowQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionPackageShowRequest:
    query_params: GetActionPackageShowQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionPackageShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
