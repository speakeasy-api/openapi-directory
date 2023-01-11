import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class LandlordControllerGetDocumentPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetDocumentQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetDocumentRequest:
    path_params: LandlordControllerGetDocumentPathParams = dataclasses.field()
    query_params: LandlordControllerGetDocumentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
