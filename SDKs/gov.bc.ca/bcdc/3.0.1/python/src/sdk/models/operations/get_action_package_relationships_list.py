import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionPackageRelationshipsListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id2: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id2', 'style': 'form', 'explode': True }})
    rel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionPackageRelationshipsListRequest:
    query_params: GetActionPackageRelationshipsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionPackageRelationshipsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
