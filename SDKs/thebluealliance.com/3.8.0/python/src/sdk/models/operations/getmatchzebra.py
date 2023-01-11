import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import zebra as shared_zebra


@dataclasses.dataclass
class GetMatchZebraPathParams:
    match_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchZebraHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchZebraSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMatchZebraRequest:
    headers: GetMatchZebraHeaders = dataclasses.field()
    path_params: GetMatchZebraPathParams = dataclasses.field()
    security: GetMatchZebraSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMatchZebraResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    zebra: Optional[shared_zebra.Zebra] = dataclasses.field(default=None)
    
