import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactinformation as shared_contactinformation
from ..shared import seller as shared_seller
from ..shared import targetingcriteria as shared_targetingcriteria
from ..shared import dealterms as shared_dealterms

class ProductSyndicationProductEnum(str, Enum):
    SYNDICATION_PRODUCT_UNSPECIFIED = "SYNDICATION_PRODUCT_UNSPECIFIED"
    CONTENT = "CONTENT"
    MOBILE = "MOBILE"
    VIDEO = "VIDEO"
    GAMES = "GAMES"


@dataclass_json
@dataclasses.dataclass
class Product:
    r"""Product
    A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
    """
    
    available_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableEndTime') }})
    available_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableStartTime') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_contacts: Optional[list[shared_contactinformation.ContactInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorContacts') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    has_creator_signed_off: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCreatorSignedOff') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRevision') }})
    publisher_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfileId') }})
    seller: Optional[shared_seller.Seller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    syndication_product: Optional[ProductSyndicationProductEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syndicationProduct') }})
    targeting_criterion: Optional[list[shared_targetingcriteria.TargetingCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingCriterion') }})
    terms: Optional[shared_dealterms.DealTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    web_property_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    
