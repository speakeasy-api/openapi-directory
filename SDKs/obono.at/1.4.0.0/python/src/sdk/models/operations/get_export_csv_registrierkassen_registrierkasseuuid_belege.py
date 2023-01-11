import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    posten: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'posten', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegePathParams = dataclasses.field()
    query_params: GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
