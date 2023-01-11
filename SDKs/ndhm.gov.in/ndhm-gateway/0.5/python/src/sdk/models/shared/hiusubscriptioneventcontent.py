import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventcategorydetail as shared_eventcategorydetail
from ..shared import organizationrepresentation as shared_organizationrepresentation
from ..shared import consentmanagerpatientid as shared_consentmanagerpatientid


@dataclass_json
@dataclasses.dataclass
class HiuSubscriptionEventContent:
    context: list[shared_eventcategorydetail.EventCategoryDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    hip: shared_organizationrepresentation.OrganizationRepresentation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    patient: shared_consentmanagerpatientid.ConsentManagerPatientID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    
