import dataclasses
from typing import Optional
from ..shared import availableprefix as shared_availableprefix


@dataclasses.dataclass
class IpamPrefixesAvailablePrefixesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesAvailablePrefixesReadRequest:
    path_params: IpamPrefixesAvailablePrefixesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamPrefixesAvailablePrefixesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    available_prefixes: Optional[list[shared_availableprefix.AvailablePrefix]] = dataclasses.field(default=None)
    
