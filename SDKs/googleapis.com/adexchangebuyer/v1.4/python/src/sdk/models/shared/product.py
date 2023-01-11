import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buyer as shared_buyer
from ..shared import contactinformation as shared_contactinformation
from ..shared import deliverycontrol as shared_deliverycontrol
from ..shared import marketplacelabel as shared_marketplacelabel
from ..shared import publisherprovidedforecast as shared_publisherprovidedforecast
from ..shared import seller as shared_seller
from ..shared import sharedtargeting as shared_sharedtargeting
from ..shared import dealterms as shared_dealterms


@dataclass_json
@dataclasses.dataclass
class Product:
    r"""Product
    A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
    
    (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
    """
    
    billed_buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    creation_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimeMs') }})
    creator_contacts: Optional[list[shared_contactinformation.ContactInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorContacts') }})
    creator_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorRole') }})
    delivery_control: Optional[shared_deliverycontrol.DeliveryControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryControl') }})
    flight_end_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTimeMs') }})
    flight_start_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTimeMs') }})
    has_creator_signed_off: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCreatorSignedOff') }})
    inventory_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySource') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[list[shared_marketplacelabel.MarketplaceLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_update_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTimeMs') }})
    legacy_offer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyOfferId') }})
    marketplace_publisher_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplacePublisherProfileId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_auction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionId') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    publisher_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfileId') }})
    publisher_provided_forecast: Optional[shared_publisherprovidedforecast.PublisherProvidedForecast] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProvidedForecast') }})
    revision_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionNumber') }})
    seller: Optional[shared_seller.Seller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    shared_targetings: Optional[list[shared_sharedtargeting.SharedTargeting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedTargetings') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    syndication_product: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syndicationProduct') }})
    terms: Optional[shared_dealterms.DealTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    web_property_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    
