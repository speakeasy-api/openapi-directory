import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import adunit as shared_adunit


@dataclasses.dataclass
class AdsensehostAccountsAdunitsGetPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    ad_client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'adClientId', 'style': 'simple', 'explode': False }})
    ad_unit_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'adUnitId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AdsensehostAccountsAdunitsGetQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdsensehostAccountsAdunitsGetSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdsensehostAccountsAdunitsGetRequest:
    path_params: AdsensehostAccountsAdunitsGetPathParams = dataclasses.field()
    query_params: AdsensehostAccountsAdunitsGetQueryParams = dataclasses.field()
    security: AdsensehostAccountsAdunitsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AdsensehostAccountsAdunitsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad_unit: Optional[shared_adunit.AdUnit] = dataclasses.field(default=None)
    
