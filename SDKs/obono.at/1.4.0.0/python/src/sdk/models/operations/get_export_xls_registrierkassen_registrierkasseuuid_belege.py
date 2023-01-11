import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams = dataclasses.field()
    query_params: GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
