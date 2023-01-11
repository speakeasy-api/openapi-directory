import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec as shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails as shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails
from ..shared import googlecloudpaymentsresellersubscriptionv1productpayload as shared_googlecloudpaymentsresellersubscriptionv1productpayload
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec as shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum(str, Enum):
    LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED"
    LINE_ITEM_RECURRENCE_TYPE_PERIODIC = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC"
    LINE_ITEM_RECURRENCE_TYPE_ONE_TIME = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum(str, Enum):
    LINE_ITEM_STATE_UNSPECIFIED = "LINE_ITEM_STATE_UNSPECIFIED"
    LINE_ITEM_STATE_ACTIVE = "LINE_ITEM_STATE_ACTIVE"
    LINE_ITEM_STATE_INACTIVE = "LINE_ITEM_STATE_INACTIVE"
    LINE_ITEM_STATE_NEW = "LINE_ITEM_STATE_NEW"
    LINE_ITEM_STATE_ACTIVATING = "LINE_ITEM_STATE_ACTIVATING"
    LINE_ITEM_STATE_DEACTIVATING = "LINE_ITEM_STATE_DEACTIVATING"
    LINE_ITEM_STATE_WAITING_TO_DEACTIVATE = "LINE_ITEM_STATE_WAITING_TO_DEACTIVATE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem
    Individual line item definition of a subscription.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    line_item_free_trial_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemFreeTrialEndTime') }})
    line_item_promotion_specs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemPromotionSpecs') }})
    one_time_recurrence_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeRecurrenceDetails') }})
    product: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    product_payload: Optional[shared_googlecloudpaymentsresellersubscriptionv1productpayload.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productPayload') }})
    recurrence_type: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrenceType') }})
    state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput
    Individual line item definition of a subscription.
    """
    
    line_item_promotion_specs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemPromotionSpecs') }})
    one_time_recurrence_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeRecurrenceDetails') }})
    product: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    product_payload: Optional[shared_googlecloudpaymentsresellersubscriptionv1productpayload.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productPayload') }})
    
