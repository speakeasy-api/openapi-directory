import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationrepresentation as shared_organizationrepresentation
from ..shared import consentmanagerpatientid as shared_consentmanagerpatientid
from ..shared import hiusubscriptioncontext as shared_hiusubscriptioncontext


@dataclass_json
@dataclasses.dataclass
class HiuSubscription:
    hiu: shared_organizationrepresentation.OrganizationRepresentation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    patient: shared_consentmanagerpatientid.ConsentManagerPatientID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    sources: list[shared_hiusubscriptioncontext.HiuSubscriptionContext] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
