import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1promotion as shared_googlecloudpaymentsresellersubscriptionv1promotion


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    promotions: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1promotion.GoogleCloudPaymentsResellerSubscriptionV1Promotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    
