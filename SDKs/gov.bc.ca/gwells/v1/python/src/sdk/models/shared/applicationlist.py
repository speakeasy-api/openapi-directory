import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationstatuscode as shared_applicationstatuscode
from ..shared import qualification as shared_qualification
from ..shared import subactivity as shared_subactivity


@dataclass_json
@dataclasses.dataclass
class ApplicationList:
    subactivity: shared_subactivity.Subactivity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subactivity') }})
    cert_authority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cert_authority') }})
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    current_status: Optional[shared_applicationstatuscode.ApplicationStatusCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_status') }})
    display_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_status') }})
    qualifications: Optional[list[shared_qualification.Qualification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifications') }})
    removal_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removal_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
