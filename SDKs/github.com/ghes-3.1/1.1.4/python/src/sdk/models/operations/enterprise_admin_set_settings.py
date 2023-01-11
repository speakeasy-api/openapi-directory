import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetSettingsRequestBody:
    settings: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclasses.dataclass
class EnterpriseAdminSetSettingsRequest:
    request: Optional[EnterpriseAdminSetSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
