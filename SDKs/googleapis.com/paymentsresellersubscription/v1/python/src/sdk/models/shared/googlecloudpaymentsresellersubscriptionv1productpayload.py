import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1googleonepayload as shared_googlecloudpaymentsresellersubscriptionv1googleonepayload
from ..shared import googlecloudpaymentsresellersubscriptionv1youtubepayload as shared_googlecloudpaymentsresellersubscriptionv1youtubepayload


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ProductPayload:
    r"""GoogleCloudPaymentsResellerSubscriptionV1ProductPayload
    Specifies product specific payload.
    """
    
    google_one_payload: Optional[shared_googlecloudpaymentsresellersubscriptionv1googleonepayload.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleOnePayload') }})
    youtube_payload: Optional[shared_googlecloudpaymentsresellersubscriptionv1youtubepayload.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubePayload') }})
    
