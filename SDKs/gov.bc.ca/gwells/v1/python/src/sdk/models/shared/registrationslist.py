import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationlist as shared_applicationlist
from ..shared import organizationlist as shared_organizationlist


@dataclass_json
@dataclasses.dataclass
class RegistrationsList:
    organization: shared_organizationlist.OrganizationList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    activity_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_description') }})
    applications: Optional[list[shared_applicationlist.ApplicationList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    registration_no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_no') }})
    
