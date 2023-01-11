import dataclasses
from typing import Optional
from ..shared import writableprefix as shared_writableprefix
from ..shared import availableprefix as shared_availableprefix


@dataclasses.dataclass
class IpamPrefixesAvailablePrefixesCreatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesAvailablePrefixesCreateRequest:
    path_params: IpamPrefixesAvailablePrefixesCreatePathParams = dataclasses.field()
    request: shared_writableprefix.WritablePrefixInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamPrefixesAvailablePrefixesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    available_prefixes: Optional[list[shared_availableprefix.AvailablePrefix]] = dataclasses.field(default=None)
    
