import dataclasses
from typing import Optional
from ..shared import rir as shared_rir


@dataclasses.dataclass
class IpamRirsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamRirsReadRequest:
    path_params: IpamRirsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamRirsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rir: Optional[shared_rir.Rir] = dataclasses.field(default=None)
    
