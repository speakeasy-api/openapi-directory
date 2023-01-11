import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublicSubscriptionStatusLegalBasisEnum(str, Enum):
    LEGITIMATE_INTEREST_PQL = "LEGITIMATE_INTEREST_PQL"
    LEGITIMATE_INTEREST_CLIENT = "LEGITIMATE_INTEREST_CLIENT"
    PERFORMANCE_OF_CONTRACT = "PERFORMANCE_OF_CONTRACT"
    CONSENT_WITH_NOTICE = "CONSENT_WITH_NOTICE"
    NON_GDPR = "NON_GDPR"
    PROCESS_AND_STORE = "PROCESS_AND_STORE"
    LEGITIMATE_INTEREST_OTHER = "LEGITIMATE_INTEREST_OTHER"

class PublicSubscriptionStatusSourceOfStatusEnum(str, Enum):
    PORTAL_WIDE_STATUS = "PORTAL_WIDE_STATUS"
    BRAND_WIDE_STATUS = "BRAND_WIDE_STATUS"
    SUBSCRIPTION_STATUS = "SUBSCRIPTION_STATUS"

class PublicSubscriptionStatusStatusEnum(str, Enum):
    SUBSCRIBED = "SUBSCRIBED"
    NOT_SUBSCRIBED = "NOT_SUBSCRIBED"


@dataclass_json
@dataclasses.dataclass
class PublicSubscriptionStatus:
    r"""PublicSubscriptionStatus
    The status of a subscription for a contact.
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_of_status: PublicSubscriptionStatusSourceOfStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceOfStatus') }})
    status: PublicSubscriptionStatusStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    brand_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandId') }})
    legal_basis: Optional[PublicSubscriptionStatusLegalBasisEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalBasis') }})
    legal_basis_explanation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalBasisExplanation') }})
    preference_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferenceGroupName') }})
    
