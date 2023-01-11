import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1productpriceconfig as shared_googlecloudpaymentsresellersubscriptionv1productpriceconfig
from ..shared import googlecloudpaymentsresellersubscriptionv1duration as shared_googlecloudpaymentsresellersubscriptionv1duration
from ..shared import googletypelocalizedtext as shared_googletypelocalizedtext


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Product:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Product
    A Product resource that defines a subscription service that can be resold.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    price_configs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1productpriceconfig.GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceConfigs') }})
    region_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCodes') }})
    subscription_billing_cycle_duration: Optional[shared_googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionBillingCycleDuration') }})
    titles: Optional[list[shared_googletypelocalizedtext.GoogleTypeLocalizedText]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titles') }})
    
