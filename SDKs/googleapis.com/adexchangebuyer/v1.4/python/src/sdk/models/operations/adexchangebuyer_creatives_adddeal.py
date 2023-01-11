import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AdexchangebuyerCreativesAddDealPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    buyer_creative_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'buyerCreativeId', 'style': 'simple', 'explode': False }})
    deal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dealId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AdexchangebuyerCreativesAddDealQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdexchangebuyerCreativesAddDealSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdexchangebuyerCreativesAddDealRequest:
    path_params: AdexchangebuyerCreativesAddDealPathParams = dataclasses.field()
    query_params: AdexchangebuyerCreativesAddDealQueryParams = dataclasses.field()
    security: AdexchangebuyerCreativesAddDealSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AdexchangebuyerCreativesAddDealResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
