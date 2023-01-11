import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buyer as shared_buyer
from ..shared import contactinformation as shared_contactinformation
from ..shared import privatedata as shared_privatedata
from ..shared import deal as shared_deal
from ..shared import note as shared_note
from ..shared import seller as shared_seller
from ..shared import deal as shared_deal
from ..shared import seller as shared_seller

class ProposalLastUpdaterOrCommentorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalOriginatorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalProposalStateEnum(str, Enum):
    PROPOSAL_STATE_UNSPECIFIED = "PROPOSAL_STATE_UNSPECIFIED"
    PROPOSED = "PROPOSED"
    BUYER_ACCEPTED = "BUYER_ACCEPTED"
    SELLER_ACCEPTED = "SELLER_ACCEPTED"
    CANCELED = "CANCELED"
    FINALIZED = "FINALIZED"


@dataclass_json
@dataclasses.dataclass
class Proposal:
    r"""Proposal
    Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
    """
    
    billed_buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_contacts: Optional[list[shared_contactinformation.ContactInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    buyer_private_data: Optional[shared_privatedata.PrivateData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    deals: Optional[list[shared_deal.Deal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_renegotiating: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRenegotiating') }})
    is_setup_complete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSetupComplete') }})
    last_updater_or_commentor_role: Optional[ProposalLastUpdaterOrCommentorRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterOrCommentorRole') }})
    notes: Optional[list[shared_note.Note]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originator_role: Optional[ProposalOriginatorRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorRole') }})
    private_auction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionId') }})
    proposal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    proposal_revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    proposal_state: Optional[ProposalProposalStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalState') }})
    seller: Optional[shared_seller.Seller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    seller_contacts: Optional[list[shared_contactinformation.ContactInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerContacts') }})
    terms_and_conditions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ProposalInput:
    r"""ProposalInput
    Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
    """
    
    billed_buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_contacts: Optional[list[shared_contactinformation.ContactInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    buyer_private_data: Optional[shared_privatedata.PrivateData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    deals: Optional[list[shared_deal.DealInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    seller: Optional[shared_seller.SellerInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    
