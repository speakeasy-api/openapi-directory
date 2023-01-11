import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1duration as shared_googlecloudpaymentsresellersubscriptionv1duration


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Extension:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Extension
    Describes the details of an extension request.
    """
    
    duration: Optional[shared_googlecloudpaymentsresellersubscriptionv1duration.GoogleCloudPaymentsResellerSubscriptionV1Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    partner_user_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerUserToken') }})
    
