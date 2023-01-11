import dataclasses
from typing import Optional


@dataclasses.dataclass
class CheckRequest:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    api_secret: str = dataclasses.field(metadata={'form': { 'field_name': 'api_secret' }})
    code: str = dataclasses.field(metadata={'form': { 'field_name': 'code' }})
    request_id: str = dataclasses.field(metadata={'form': { 'field_name': 'request_id' }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ip_address' }})
    
