import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeAPIKeyAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-OPENFIGI-APIKEY' }})
    

@dataclasses.dataclass
class Security:
    api_key_auth: Optional[SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
