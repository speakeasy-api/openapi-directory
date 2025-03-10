"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class PublicSubscriptionStatusLegalBasisEnum(str, Enum):
    r"""The legal reason for the current status of the subscription."""
    LEGITIMATE_INTEREST_PQL = 'LEGITIMATE_INTEREST_PQL'
    LEGITIMATE_INTEREST_CLIENT = 'LEGITIMATE_INTEREST_CLIENT'
    PERFORMANCE_OF_CONTRACT = 'PERFORMANCE_OF_CONTRACT'
    CONSENT_WITH_NOTICE = 'CONSENT_WITH_NOTICE'
    NON_GDPR = 'NON_GDPR'
    PROCESS_AND_STORE = 'PROCESS_AND_STORE'
    LEGITIMATE_INTEREST_OTHER = 'LEGITIMATE_INTEREST_OTHER'

class PublicSubscriptionStatusSourceOfStatusEnum(str, Enum):
    r"""Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal."""
    PORTAL_WIDE_STATUS = 'PORTAL_WIDE_STATUS'
    BRAND_WIDE_STATUS = 'BRAND_WIDE_STATUS'
    SUBSCRIPTION_STATUS = 'SUBSCRIPTION_STATUS'

class PublicSubscriptionStatusStatusEnum(str, Enum):
    r"""Whether the contact is subscribed."""
    SUBSCRIBED = 'SUBSCRIBED'
    NOT_SUBSCRIBED = 'NOT_SUBSCRIBED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PublicSubscriptionStatus:
    r"""The status of a subscription for a contact."""
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description') }})
    r"""A description of the subscription."""  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The ID for the subscription."""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The name of the subscription."""  
    source_of_status: PublicSubscriptionStatusSourceOfStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sourceOfStatus') }})
    r"""Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal."""  
    status: PublicSubscriptionStatusStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})
    r"""Whether the contact is subscribed."""  
    brand_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('brandId'), 'exclude': lambda f: f is None }})
    r"""The ID of the brand that the subscription is associated with, if there is one."""  
    legal_basis: Optional[PublicSubscriptionStatusLegalBasisEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalBasis'), 'exclude': lambda f: f is None }})
    r"""The legal reason for the current status of the subscription."""  
    legal_basis_explanation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalBasisExplanation'), 'exclude': lambda f: f is None }})
    r"""A more detailed explanation to go with the legal basis."""  
    preference_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('preferenceGroupName'), 'exclude': lambda f: f is None }})
    r"""The name of the preferences group that the subscription is associated with."""  
    