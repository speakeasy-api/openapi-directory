import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptioncategory_enum as shared_subscriptioncategory_enum
from ..shared import organizationrepresentation as shared_organizationrepresentation
from ..shared import consentmanagerpatientid as shared_consentmanagerpatientid
from ..shared import subscriptionperiod as shared_subscriptionperiod
from ..shared import usepurpose as shared_usepurpose


@dataclass_json
@dataclasses.dataclass
class SubscriptionRequestSubscription:
    categories: list[shared_subscriptioncategory_enum.SubscriptionCategoryEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    hiu: shared_organizationrepresentation.OrganizationRepresentation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    patient: shared_consentmanagerpatientid.ConsentManagerPatientID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    period: shared_subscriptionperiod.SubscriptionPeriod = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    purpose: shared_usepurpose.UsePurpose = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    hips: Optional[list[shared_organizationrepresentation.OrganizationRepresentation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hips') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscriptionRequest:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    subscription: SubscriptionRequestSubscription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
