import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price
from ..shared import inappproductlisting as shared_inappproductlisting
from ..shared import managedproducttaxandcompliancesettings as shared_managedproducttaxandcompliancesettings
from ..shared import subscriptiontaxandcompliancesettings as shared_subscriptiontaxandcompliancesettings

class InAppProductPurchaseTypeEnum(str, Enum):
    PURCHASE_TYPE_UNSPECIFIED = "purchaseTypeUnspecified"
    MANAGED_USER = "managedUser"
    SUBSCRIPTION = "subscription"

class InAppProductStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "statusUnspecified"
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class InAppProduct:
    r"""InAppProduct
    An in-app product. The resource for InappproductsService.
    """
    
    default_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    default_price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPrice') }})
    grace_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriod') }})
    listings: Optional[dict[str, shared_inappproductlisting.InAppProductListing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    managed_product_taxes_and_compliance_settings: Optional[shared_managedproducttaxandcompliancesettings.ManagedProductTaxAndComplianceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedProductTaxesAndComplianceSettings') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    prices: Optional[dict[str, shared_price.Price]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    purchase_type: Optional[InAppProductPurchaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseType') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    status: Optional[InAppProductStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionPeriod') }})
    subscription_taxes_and_compliance_settings: Optional[shared_subscriptiontaxandcompliancesettings.SubscriptionTaxAndComplianceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionTaxesAndComplianceSettings') }})
    trial_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriod') }})
    
