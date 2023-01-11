import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams = dataclasses.field()
    query_params: GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
