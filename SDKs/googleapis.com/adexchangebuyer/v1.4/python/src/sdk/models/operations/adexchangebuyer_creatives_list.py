import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import creativeslist as shared_creativeslist

class AdexchangebuyerCreativesListDealsStatusFilterEnum(str, Enum):
    APPROVED = "approved"
    CONDITIONALLY_APPROVED = "conditionally_approved"
    DISAPPROVED = "disapproved"
    NOT_CHECKED = "not_checked"

class AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum(str, Enum):
    APPROVED = "approved"
    CONDITIONALLY_APPROVED = "conditionally_approved"
    DISAPPROVED = "disapproved"
    NOT_CHECKED = "not_checked"


@dataclasses.dataclass
class AdexchangebuyerCreativesListQueryParams:
    account_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    buyer_creative_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'buyerCreativeId', 'style': 'form', 'explode': True }})
    deals_status_filter: Optional[AdexchangebuyerCreativesListDealsStatusFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealsStatusFilter', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    open_auction_status_filter: Optional[AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'openAuctionStatusFilter', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdexchangebuyerCreativesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdexchangebuyerCreativesListRequest:
    query_params: AdexchangebuyerCreativesListQueryParams = dataclasses.field()
    security: AdexchangebuyerCreativesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AdexchangebuyerCreativesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    creatives_list: Optional[shared_creativeslist.CreativesList] = dataclasses.field(default=None)
    
