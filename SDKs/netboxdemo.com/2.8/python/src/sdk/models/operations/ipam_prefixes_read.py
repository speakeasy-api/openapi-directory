import dataclasses
from typing import Optional
from ..shared import prefix as shared_prefix


@dataclasses.dataclass
class IpamPrefixesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesReadRequest:
    path_params: IpamPrefixesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamPrefixesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prefix: Optional[shared_prefix.Prefix] = dataclasses.field(default=None)
    
