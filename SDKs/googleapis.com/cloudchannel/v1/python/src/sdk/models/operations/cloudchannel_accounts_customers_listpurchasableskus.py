import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlecloudchannelv1listpurchasableskusresponse as shared_googlecloudchannelv1listpurchasableskusresponse


@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableSkusPathParams:
    customer: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer', 'style': 'simple', 'explode': False }})
    
class CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum(str, Enum):
    CHANGE_TYPE_UNSPECIFIED = "CHANGE_TYPE_UNSPECIFIED"
    UPGRADE = "UPGRADE"
    DOWNGRADE = "DOWNGRADE"


@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableSkusQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    change_offer_purchase_change_type: Optional[CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changeOfferPurchase.changeType', 'style': 'form', 'explode': True }})
    change_offer_purchase_entitlement: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changeOfferPurchase.entitlement', 'style': 'form', 'explode': True }})
    create_entitlement_purchase_product: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createEntitlementPurchase.product', 'style': 'form', 'explode': True }})
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
class CloudchannelAccountsCustomersListPurchasableSkusSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableSkusRequest:
    path_params: CloudchannelAccountsCustomersListPurchasableSkusPathParams = dataclasses.field()
    query_params: CloudchannelAccountsCustomersListPurchasableSkusQueryParams = dataclasses.field()
    security: CloudchannelAccountsCustomersListPurchasableSkusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CloudchannelAccountsCustomersListPurchasableSkusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_cloud_channel_v1_list_purchasable_skus_response: Optional[shared_googlecloudchannelv1listpurchasableskusresponse.GoogleCloudChannelV1ListPurchasableSkusResponse] = dataclasses.field(default=None)
    
