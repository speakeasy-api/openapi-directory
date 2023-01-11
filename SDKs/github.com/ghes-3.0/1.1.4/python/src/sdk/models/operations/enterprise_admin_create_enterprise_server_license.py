import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody:
    license: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseRequest:
    request: Optional[EnterpriseAdminCreateEnterpriseServerLicenseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
