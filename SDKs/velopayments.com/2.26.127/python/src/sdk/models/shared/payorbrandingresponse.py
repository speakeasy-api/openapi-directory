import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PayorBrandingResponse:
    logo_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    payor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    collective_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectiveAlias') }})
    dba_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    support_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContact') }})
    
