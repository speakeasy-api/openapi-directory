import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import pagespeedapipagespeedresponsev5 as shared_pagespeedapipagespeedresponsev5

class PagespeedonlinePagespeedapiRunpagespeedCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    ACCESSIBILITY = "ACCESSIBILITY"
    BEST_PRACTICES = "BEST_PRACTICES"
    PERFORMANCE = "PERFORMANCE"
    PWA = "PWA"
    SEO = "SEO"

class PagespeedonlinePagespeedapiRunpagespeedStrategyEnum(str, Enum):
    STRATEGY_UNSPECIFIED = "STRATEGY_UNSPECIFIED"
    DESKTOP = "DESKTOP"
    MOBILE = "MOBILE"


@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    captcha_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'captchaToken', 'style': 'form', 'explode': True }})
    category: Optional[list[PagespeedonlinePagespeedapiRunpagespeedCategoryEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    strategy: Optional[PagespeedonlinePagespeedapiRunpagespeedStrategyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'strategy', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    utm_campaign: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'utm_campaign', 'style': 'form', 'explode': True }})
    utm_source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'utm_source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedRequest:
    query_params: PagespeedonlinePagespeedapiRunpagespeedQueryParams = dataclasses.field()
    security: PagespeedonlinePagespeedapiRunpagespeedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pagespeed_api_pagespeed_response_v5: Optional[shared_pagespeedapipagespeedresponsev5.PagespeedAPIPagespeedResponseV5] = dataclasses.field(default=None)
    
