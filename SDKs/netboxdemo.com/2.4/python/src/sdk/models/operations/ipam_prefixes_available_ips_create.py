import dataclasses
from typing import Optional
from ..shared import writableprefix as shared_writableprefix
from ..shared import prefix as shared_prefix


@dataclasses.dataclass
class IpamPrefixesAvailableIpsCreatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesAvailableIpsCreateRequest:
    path_params: IpamPrefixesAvailableIpsCreatePathParams = dataclasses.field()
    request: shared_writableprefix.WritablePrefixInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamPrefixesAvailableIpsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prefix: Optional[shared_prefix.Prefix] = dataclasses.field(default=None)
    
