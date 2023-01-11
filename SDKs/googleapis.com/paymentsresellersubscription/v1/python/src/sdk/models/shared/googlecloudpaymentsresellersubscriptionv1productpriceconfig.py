import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1amount as shared_googlecloudpaymentsresellersubscriptionv1amount


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig:
    r"""GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig
    Configs the prices in an available region.
    """
    
    amount: Optional[shared_googlecloudpaymentsresellersubscriptionv1amount.GoogleCloudPaymentsResellerSubscriptionV1Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
