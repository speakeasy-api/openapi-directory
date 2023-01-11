import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import searchtargetingoptionsrequest as shared_searchtargetingoptionsrequest
from ..shared import searchtargetingoptionsresponse as shared_searchtargetingoptionsresponse

class DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum(str, Enum):
    TARGETING_TYPE_UNSPECIFIED = "TARGETING_TYPE_UNSPECIFIED"
    TARGETING_TYPE_CHANNEL = "TARGETING_TYPE_CHANNEL"
    TARGETING_TYPE_APP_CATEGORY = "TARGETING_TYPE_APP_CATEGORY"
    TARGETING_TYPE_APP = "TARGETING_TYPE_APP"
    TARGETING_TYPE_URL = "TARGETING_TYPE_URL"
    TARGETING_TYPE_DAY_AND_TIME = "TARGETING_TYPE_DAY_AND_TIME"
    TARGETING_TYPE_AGE_RANGE = "TARGETING_TYPE_AGE_RANGE"
    TARGETING_TYPE_REGIONAL_LOCATION_LIST = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
    TARGETING_TYPE_PROXIMITY_LOCATION_LIST = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
    TARGETING_TYPE_GENDER = "TARGETING_TYPE_GENDER"
    TARGETING_TYPE_VIDEO_PLAYER_SIZE = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
    TARGETING_TYPE_USER_REWARDED_CONTENT = "TARGETING_TYPE_USER_REWARDED_CONTENT"
    TARGETING_TYPE_PARENTAL_STATUS = "TARGETING_TYPE_PARENTAL_STATUS"
    TARGETING_TYPE_CONTENT_INSTREAM_POSITION = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
    TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
    TARGETING_TYPE_DEVICE_TYPE = "TARGETING_TYPE_DEVICE_TYPE"
    TARGETING_TYPE_AUDIENCE_GROUP = "TARGETING_TYPE_AUDIENCE_GROUP"
    TARGETING_TYPE_BROWSER = "TARGETING_TYPE_BROWSER"
    TARGETING_TYPE_HOUSEHOLD_INCOME = "TARGETING_TYPE_HOUSEHOLD_INCOME"
    TARGETING_TYPE_ON_SCREEN_POSITION = "TARGETING_TYPE_ON_SCREEN_POSITION"
    TARGETING_TYPE_THIRD_PARTY_VERIFIER = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
    TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
    TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
    TARGETING_TYPE_ENVIRONMENT = "TARGETING_TYPE_ENVIRONMENT"
    TARGETING_TYPE_CARRIER_AND_ISP = "TARGETING_TYPE_CARRIER_AND_ISP"
    TARGETING_TYPE_OPERATING_SYSTEM = "TARGETING_TYPE_OPERATING_SYSTEM"
    TARGETING_TYPE_DEVICE_MAKE_MODEL = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
    TARGETING_TYPE_KEYWORD = "TARGETING_TYPE_KEYWORD"
    TARGETING_TYPE_NEGATIVE_KEYWORD_LIST = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
    TARGETING_TYPE_VIEWABILITY = "TARGETING_TYPE_VIEWABILITY"
    TARGETING_TYPE_CATEGORY = "TARGETING_TYPE_CATEGORY"
    TARGETING_TYPE_INVENTORY_SOURCE = "TARGETING_TYPE_INVENTORY_SOURCE"
    TARGETING_TYPE_LANGUAGE = "TARGETING_TYPE_LANGUAGE"
    TARGETING_TYPE_AUTHORIZED_SELLER_STATUS = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
    TARGETING_TYPE_GEO_REGION = "TARGETING_TYPE_GEO_REGION"
    TARGETING_TYPE_INVENTORY_SOURCE_GROUP = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
    TARGETING_TYPE_EXCHANGE = "TARGETING_TYPE_EXCHANGE"
    TARGETING_TYPE_SUB_EXCHANGE = "TARGETING_TYPE_SUB_EXCHANGE"
    TARGETING_TYPE_POI = "TARGETING_TYPE_POI"
    TARGETING_TYPE_BUSINESS_CHAIN = "TARGETING_TYPE_BUSINESS_CHAIN"
    TARGETING_TYPE_CONTENT_DURATION = "TARGETING_TYPE_CONTENT_DURATION"
    TARGETING_TYPE_CONTENT_STREAM_TYPE = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
    TARGETING_TYPE_NATIVE_CONTENT_POSITION = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
    TARGETING_TYPE_OMID = "TARGETING_TYPE_OMID"
    TARGETING_TYPE_AUDIO_CONTENT_TYPE = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
    TARGETING_TYPE_CONTENT_GENRE = "TARGETING_TYPE_CONTENT_GENRE"


@dataclasses.dataclass
class DisplayvideoTargetingTypesTargetingOptionsSearchPathParams:
    targeting_type: DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'targetingType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams:
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
class DisplayvideoTargetingTypesTargetingOptionsSearchSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DisplayvideoTargetingTypesTargetingOptionsSearchRequest:
    path_params: DisplayvideoTargetingTypesTargetingOptionsSearchPathParams = dataclasses.field()
    query_params: DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams = dataclasses.field()
    security: DisplayvideoTargetingTypesTargetingOptionsSearchSecurity = dataclasses.field()
    request: Optional[shared_searchtargetingoptionsrequest.SearchTargetingOptionsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisplayvideoTargetingTypesTargetingOptionsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_targeting_options_response: Optional[shared_searchtargetingoptionsresponse.SearchTargetingOptionsResponse] = dataclasses.field(default=None)
    
