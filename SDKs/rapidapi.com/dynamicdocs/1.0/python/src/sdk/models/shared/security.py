import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeAdvSecurityToken:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'ADVICEment API Key' }})
    

@dataclasses.dataclass
class SchemeXRapidAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'RapidAPI.com API Key' }})
    

@dataclasses.dataclass
class Security:
    adv_security_token: Optional[SchemeAdvSecurityToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    x_rapid_api_key: Optional[SchemeXRapidAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
