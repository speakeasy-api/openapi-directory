import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum(str, Enum):
    OFFERING_UNSPECIFIED = "OFFERING_UNSPECIFIED"
    OFFERING_VAS_BUNDLE = "OFFERING_VAS_BUNDLE"
    OFFERING_VAS_STANDALONE = "OFFERING_VAS_STANDALONE"
    OFFERING_HARD_BUNDLE = "OFFERING_HARD_BUNDLE"
    OFFERING_SOFT_BUNDLE = "OFFERING_SOFT_BUNDLE"

class GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum(str, Enum):
    CHANNEL_UNSPECIFIED = "CHANNEL_UNSPECIFIED"
    CHANNEL_RETAIL = "CHANNEL_RETAIL"
    CHANNEL_ONLINE_WEB = "CHANNEL_ONLINE_WEB"
    CHANNEL_ONLINE_ANDROID_APP = "CHANNEL_ONLINE_ANDROID_APP"
    CHANNEL_ONLINE_IOS_APP = "CHANNEL_ONLINE_IOS_APP"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload:
    r"""GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload
    Payload specific to Google One products.
    """
    
    campaigns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    offering: Optional[GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offering') }})
    sales_channel: Optional[GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesChannel') }})
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeId') }})
    
