import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googlecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest as shared_googlecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest
from ..shared import googlecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse as shared_googlecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse


@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest:
    path_params: PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams = dataclasses.field()
    query_params: PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams = dataclasses.field()
    request: Optional[shared_googlecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_cloud_payments_reseller_subscription_v1_cancel_subscription_response: Optional[shared_googlecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse] = dataclasses.field(default=None)
    
