import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebasefcmdatav1beta1androiddeliverydata as shared_googlefirebasefcmdatav1beta1androiddeliverydata


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse:
    r"""GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
    Response message for ListAndroidDeliveryData.
    """
    
    android_delivery_data: Optional[list[shared_googlefirebasefcmdatav1beta1androiddeliverydata.GoogleFirebaseFcmDataV1beta1AndroidDeliveryData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDeliveryData') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
