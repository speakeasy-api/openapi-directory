import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createlicenseedaily as shared_createlicenseedaily


@dataclass_json
@dataclasses.dataclass
class UpdateLicenseeSchema:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    daily: Optional[shared_createlicenseedaily.CreateLicenseeDaily] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daily') }})
    postcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postcode') }})
    whitelist: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    
