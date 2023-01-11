import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contact as shared_contact
from ..shared import privatedata as shared_privatedata
from ..shared import note as shared_note

class ProposalDealTypeEnum(str, Enum):
    DEAL_TYPE_UNSPECIFIED = "DEAL_TYPE_UNSPECIFIED"
    PREFERRED_DEAL = "PREFERRED_DEAL"
    PRIVATE_AUCTION = "PRIVATE_AUCTION"
    PROGRAMMATIC_GUARANTEED = "PROGRAMMATIC_GUARANTEED"

class ProposalLastUpdaterOrCommentorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalOriginatorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    BUYER_REVIEW_REQUESTED = "BUYER_REVIEW_REQUESTED"
    SELLER_REVIEW_REQUESTED = "SELLER_REVIEW_REQUESTED"
    BUYER_ACCEPTANCE_REQUESTED = "BUYER_ACCEPTANCE_REQUESTED"
    FINALIZED = "FINALIZED"
    TERMINATED = "TERMINATED"


@dataclass_json
@dataclasses.dataclass
class Proposal:
    r"""Proposal
    Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
    """
    
    billed_buyer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_contacts: Optional[list[shared_contact.Contact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    buyer_private_data: Optional[shared_privatedata.PrivateData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    deal_type: Optional[ProposalDealTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealType') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_renegotiating: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRenegotiating') }})
    last_updater_or_commentor_role: Optional[ProposalLastUpdaterOrCommentorRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterOrCommentorRole') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[list[shared_note.Note]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originator_role: Optional[ProposalOriginatorRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorRole') }})
    pausing_consented: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausingConsented') }})
    proposal_revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    publisher_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    seller_contacts: Optional[list[shared_contact.Contact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerContacts') }})
    state: Optional[ProposalStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    terms_and_conditions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
