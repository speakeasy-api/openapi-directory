import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlecloudchannelv1listpurchasableoffersresponse as shared_googlecloudchannelv1listpurchasableoffersresponse


@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableOffersPathParams:
    customer: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableOffersQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    change_offer_purchase_entitlement: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changeOfferPurchase.entitlement', 'style': 'form', 'explode': True }})
    change_offer_purchase_new_sku: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changeOfferPurchase.newSku', 'style': 'form', 'explode': True }})
    create_entitlement_purchase_sku: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createEntitlementPurchase.sku', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableOffersSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableOffersRequest:
    path_params: CloudchannelAccountsCustomersListPurchasableOffersPathParams = dataclasses.field()
    query_params: CloudchannelAccountsCustomersListPurchasableOffersQueryParams = dataclasses.field()
    security: CloudchannelAccountsCustomersListPurchasableOffersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableOffersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_cloud_channel_v1_list_purchasable_offers_response: Optional[shared_googlecloudchannelv1listpurchasableoffersresponse.GoogleCloudChannelV1ListPurchasableOffersResponse] = dataclasses.field(default=None)
    
