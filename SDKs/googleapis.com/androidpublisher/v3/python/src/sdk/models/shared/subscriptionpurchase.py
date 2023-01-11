import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptioncancelsurveyresult as shared_subscriptioncancelsurveyresult
from ..shared import introductorypriceinfo as shared_introductorypriceinfo
from ..shared import subscriptionpricechange as shared_subscriptionpricechange


@dataclass_json
@dataclasses.dataclass
class SubscriptionPurchase:
    r"""SubscriptionPurchase
    A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
    """
    
    acknowledgement_state: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgementState') }})
    auto_renewing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewing') }})
    auto_resume_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoResumeTimeMillis') }})
    cancel_reason: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelReason') }})
    cancel_survey_result: Optional[shared_subscriptioncancelsurveyresult.SubscriptionCancelSurveyResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSurveyResult') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    developer_payload: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerPayload') }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    expiry_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTimeMillis') }})
    external_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    introductory_price_info: Optional[shared_introductorypriceinfo.IntroductoryPriceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPriceInfo') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_purchase_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedPurchaseToken') }})
    obfuscated_external_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedExternalAccountId') }})
    obfuscated_external_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedExternalProfileId') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    payment_state: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentState') }})
    price_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceAmountMicros') }})
    price_change: Optional[shared_subscriptionpricechange.SubscriptionPriceChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChange') }})
    price_currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceCurrencyCode') }})
    profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileName') }})
    promotion_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionCode') }})
    promotion_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionType') }})
    purchase_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseType') }})
    start_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeMillis') }})
    user_cancellation_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userCancellationTimeMillis') }})
    
