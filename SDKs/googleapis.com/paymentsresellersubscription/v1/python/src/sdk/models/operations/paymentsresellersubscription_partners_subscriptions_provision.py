import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googlecloudpaymentsresellersubscriptionv1subscription as shared_googlecloudpaymentsresellersubscriptionv1subscription
from ..shared import googlecloudpaymentsresellersubscriptionv1subscription as shared_googlecloudpaymentsresellersubscriptionv1subscription


@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscriptionId', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest:
    path_params: PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams = dataclasses.field()
    query_params: PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams = dataclasses.field()
    request: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscription.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_cloud_payments_reseller_subscription_v1_subscription: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscription.GoogleCloudPaymentsResellerSubscriptionV1Subscription] = dataclasses.field(default=None)
    
