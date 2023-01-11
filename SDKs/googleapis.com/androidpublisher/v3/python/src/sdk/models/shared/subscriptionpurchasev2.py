import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canceledstatecontext as shared_canceledstatecontext
from ..shared import externalaccountidentifiers as shared_externalaccountidentifiers
from ..shared import subscriptionpurchaselineitem as shared_subscriptionpurchaselineitem
from ..shared import pausedstatecontext as shared_pausedstatecontext
from ..shared import subscribewithgoogleinfo as shared_subscribewithgoogleinfo

class SubscriptionPurchaseV2AcknowledgementStateEnum(str, Enum):
    ACKNOWLEDGEMENT_STATE_UNSPECIFIED = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED"
    ACKNOWLEDGEMENT_STATE_PENDING = "ACKNOWLEDGEMENT_STATE_PENDING"
    ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"

class SubscriptionPurchaseV2SubscriptionStateEnum(str, Enum):
    SUBSCRIPTION_STATE_UNSPECIFIED = "SUBSCRIPTION_STATE_UNSPECIFIED"
    SUBSCRIPTION_STATE_PENDING = "SUBSCRIPTION_STATE_PENDING"
    SUBSCRIPTION_STATE_ACTIVE = "SUBSCRIPTION_STATE_ACTIVE"
    SUBSCRIPTION_STATE_PAUSED = "SUBSCRIPTION_STATE_PAUSED"
    SUBSCRIPTION_STATE_IN_GRACE_PERIOD = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD"
    SUBSCRIPTION_STATE_ON_HOLD = "SUBSCRIPTION_STATE_ON_HOLD"
    SUBSCRIPTION_STATE_CANCELED = "SUBSCRIPTION_STATE_CANCELED"
    SUBSCRIPTION_STATE_EXPIRED = "SUBSCRIPTION_STATE_EXPIRED"


@dataclass_json
@dataclasses.dataclass
class SubscriptionPurchaseV2:
    r"""SubscriptionPurchaseV2
    Indicates the status of a user's subscription purchase.
    """
    
    acknowledgement_state: Optional[SubscriptionPurchaseV2AcknowledgementStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgementState') }})
    canceled_state_context: Optional[shared_canceledstatecontext.CanceledStateContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canceledStateContext') }})
    external_account_identifiers: Optional[shared_externalaccountidentifiers.ExternalAccountIdentifiers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountIdentifiers') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    latest_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestOrderId') }})
    line_items: Optional[list[shared_subscriptionpurchaselineitem.SubscriptionPurchaseLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    linked_purchase_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedPurchaseToken') }})
    paused_state_context: Optional[shared_pausedstatecontext.PausedStateContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausedStateContext') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    subscribe_with_google_info: Optional[shared_subscribewithgoogleinfo.SubscribeWithGoogleInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribeWithGoogleInfo') }})
    subscription_state: Optional[SubscriptionPurchaseV2SubscriptionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionState') }})
    test_purchase: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPurchase') }})
    
