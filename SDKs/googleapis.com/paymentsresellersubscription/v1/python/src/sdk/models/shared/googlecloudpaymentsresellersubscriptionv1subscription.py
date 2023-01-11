import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails as shared_googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionlineitem as shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitem
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec as shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec
from ..shared import googlecloudpaymentsresellersubscriptionv1location as shared_googlecloudpaymentsresellersubscriptionv1location
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails as shared_googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionlineitem as shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitem
from ..shared import googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec as shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum(str, Enum):
    PROCESSING_STATE_UNSPECIFIED = "PROCESSING_STATE_UNSPECIFIED"
    PROCESSING_STATE_CANCELLING = "PROCESSING_STATE_CANCELLING"
    PROCESSING_STATE_RECURRING = "PROCESSING_STATE_RECURRING"

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STATE_CREATED = "STATE_CREATED"
    STATE_ACTIVE = "STATE_ACTIVE"
    STATE_CANCELLED = "STATE_CANCELLED"
    STATE_IN_GRACE_PERIOD = "STATE_IN_GRACE_PERIOD"
    STATE_CANCEL_AT_END_OF_CYCLE = "STATE_CANCEL_AT_END_OF_CYCLE"
    STATE_SUSPENDED = "STATE_SUSPENDED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Subscription:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Subscription
    A Subscription resource managed by 3P Partners.
    """
    
    cancellation_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationDetails') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    cycle_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleEndTime') }})
    end_user_entitled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUserEntitled') }})
    free_trial_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialEndTime') }})
    line_items: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitem.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_user_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerUserToken') }})
    processing_state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingState') }})
    products: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    promotion_specs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSpecs') }})
    promotions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    renewal_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalTime') }})
    service_location: Optional[shared_googlecloudpaymentsresellersubscriptionv1location.GoogleCloudPaymentsResellerSubscriptionV1Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLocation') }})
    state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade_downgrade_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeDowngradeDetails') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput
    A Subscription resource managed by 3P Partners.
    """
    
    cancellation_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationDetails') }})
    line_items: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1subscriptionlineitem.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_user_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerUserToken') }})
    products: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    promotion_specs: Optional[list[shared_googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSpecs') }})
    promotions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    service_location: Optional[shared_googlecloudpaymentsresellersubscriptionv1location.GoogleCloudPaymentsResellerSubscriptionV1Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLocation') }})
    upgrade_downgrade_details: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeDowngradeDetails') }})
    
