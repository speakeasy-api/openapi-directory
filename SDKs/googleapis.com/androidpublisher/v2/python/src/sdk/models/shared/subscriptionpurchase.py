import dataclasses
from typing import Optional
from ..shared import subscriptioncancelsurveyresult as shared_subscriptioncancelsurveyresult
from ..shared import subscriptionpricechange as shared_subscriptionpricechange


@dataclasses.dataclass
class SubscriptionPurchase:
    r"""SubscriptionPurchase
    A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
    """
    
    auto_renewing: Optional[bool] = dataclasses.field(default=None)
    cancel_reason: Optional[int] = dataclasses.field(default=None)
    cancel_survey_result: Optional[shared_subscriptioncancelsurveyresult.SubscriptionCancelSurveyResult] = dataclasses.field(default=None)
    country_code: Optional[str] = dataclasses.field(default=None)
    developer_payload: Optional[str] = dataclasses.field(default=None)
    email_address: Optional[str] = dataclasses.field(default=None)
    expiry_time_millis: Optional[str] = dataclasses.field(default=None)
    family_name: Optional[str] = dataclasses.field(default=None)
    given_name: Optional[str] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    linked_purchase_token: Optional[str] = dataclasses.field(default=None)
    order_id: Optional[str] = dataclasses.field(default=None)
    payment_state: Optional[int] = dataclasses.field(default=None)
    price_amount_micros: Optional[str] = dataclasses.field(default=None)
    price_change: Optional[shared_subscriptionpricechange.SubscriptionPriceChange] = dataclasses.field(default=None)
    price_currency_code: Optional[str] = dataclasses.field(default=None)
    profile_id: Optional[str] = dataclasses.field(default=None)
    profile_name: Optional[str] = dataclasses.field(default=None)
    purchase_type: Optional[int] = dataclasses.field(default=None)
    start_time_millis: Optional[str] = dataclasses.field(default=None)
    user_cancellation_time_millis: Optional[str] = dataclasses.field(default=None)
    
