import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import profiles as shared_profiles


@dataclasses.dataclass
class ProfilesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ProfilesRequest:
    security: ProfilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    profiles: Optional[shared_profiles.Profiles] = dataclasses.field(default=None)
    
