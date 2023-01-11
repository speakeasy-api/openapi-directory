import dataclasses
from typing import Optional


@dataclasses.dataclass
class NumberDetails:
    country: str = dataclasses.field(metadata={'form': { 'field_name': 'country' }})
    msisdn: str = dataclasses.field(metadata={'form': { 'field_name': 'msisdn' }})
    target_api_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'target_api_key' }})
    
