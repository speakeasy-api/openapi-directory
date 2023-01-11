import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeGithubAccessCode:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeInternalAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'ckan_api_key' }})
    

@dataclasses.dataclass
class Security:
    github_access_code: Optional[SchemeGithubAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    internal_api_key: Optional[SchemeInternalAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
