import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import baseplan as shared_baseplan
from ..shared import subscriptionlisting as shared_subscriptionlisting
from ..shared import subscriptiontaxandcompliancesettings as shared_subscriptiontaxandcompliancesettings
from ..shared import baseplan as shared_baseplan


@dataclass_json
@dataclasses.dataclass
class Subscription:
    r"""Subscription
    A single subscription for an app.
    """
    
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    base_plans: Optional[list[shared_baseplan.BasePlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlans') }})
    listings: Optional[list[shared_subscriptionlisting.SubscriptionListing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    tax_and_compliance_settings: Optional[shared_subscriptiontaxandcompliancesettings.SubscriptionTaxAndComplianceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAndComplianceSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscriptionInput:
    r"""SubscriptionInput
    A single subscription for an app.
    """
    
    base_plans: Optional[list[shared_baseplan.BasePlanInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlans') }})
    listings: Optional[list[shared_subscriptionlisting.SubscriptionListing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    tax_and_compliance_settings: Optional[shared_subscriptiontaxandcompliancesettings.SubscriptionTaxAndComplianceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAndComplianceSettings') }})
    
