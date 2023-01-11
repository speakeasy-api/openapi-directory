import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import search as shared_search

class SearchCseSiterestrictListImgColorTypeEnum(str, Enum):
    IMG_COLOR_TYPE_UNDEFINED = "imgColorTypeUndefined"
    MONO = "mono"
    GRAY = "gray"
    COLOR = "color"
    TRANS = "trans"

class SearchCseSiterestrictListImgDominantColorEnum(str, Enum):
    IMG_DOMINANT_COLOR_UNDEFINED = "imgDominantColorUndefined"
    BLACK = "black"
    BLUE = "blue"
    BROWN = "brown"
    GRAY = "gray"
    GREEN = "green"
    ORANGE = "orange"
    PINK = "pink"
    PURPLE = "purple"
    RED = "red"
    TEAL = "teal"
    WHITE = "white"
    YELLOW = "yellow"

class SearchCseSiterestrictListImgSizeEnum(str, Enum):
    IMG_SIZE_UNDEFINED = "imgSizeUndefined"
    HUGE = "HUGE"
    ICON = "ICON"
    LARGE = "LARGE"
    MEDIUM = "MEDIUM"
    SMALL = "SMALL"
    XLARGE = "XLARGE"
    XXLARGE = "XXLARGE"

class SearchCseSiterestrictListImgTypeEnum(str, Enum):
    IMG_TYPE_UNDEFINED = "imgTypeUndefined"
    CLIPART = "clipart"
    FACE = "face"
    LINEART = "lineart"
    STOCK = "stock"
    PHOTO = "photo"
    ANIMATED = "animated"

class SearchCseSiterestrictListSafeEnum(str, Enum):
    SAFE_UNDEFINED = "safeUndefined"
    ACTIVE = "active"
    HIGH = "high"
    MEDIUM = "medium"
    OFF = "off"

class SearchCseSiterestrictListSearchTypeEnum(str, Enum):
    SEARCH_TYPE_UNDEFINED = "searchTypeUndefined"
    IMAGE = "image"

class SearchCseSiterestrictListSiteSearchFilterEnum(str, Enum):
    SITE_SEARCH_FILTER_UNDEFINED = "siteSearchFilterUndefined"
    E = "e"
    I = "i"


@dataclasses.dataclass
class SearchCseSiterestrictListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    c2coff: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'c2coff', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    cr: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cr', 'style': 'form', 'explode': True }})
    cx: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cx', 'style': 'form', 'explode': True }})
    date_restrict: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dateRestrict', 'style': 'form', 'explode': True }})
    exact_terms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exactTerms', 'style': 'form', 'explode': True }})
    exclude_terms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeTerms', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    file_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fileType', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    gl: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gl', 'style': 'form', 'explode': True }})
    googlehost: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googlehost', 'style': 'form', 'explode': True }})
    high_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'highRange', 'style': 'form', 'explode': True }})
    hl: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hl', 'style': 'form', 'explode': True }})
    hq: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hq', 'style': 'form', 'explode': True }})
    img_color_type: Optional[SearchCseSiterestrictListImgColorTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imgColorType', 'style': 'form', 'explode': True }})
    img_dominant_color: Optional[SearchCseSiterestrictListImgDominantColorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imgDominantColor', 'style': 'form', 'explode': True }})
    img_size: Optional[SearchCseSiterestrictListImgSizeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imgSize', 'style': 'form', 'explode': True }})
    img_type: Optional[SearchCseSiterestrictListImgTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imgType', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    link_site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linkSite', 'style': 'form', 'explode': True }})
    low_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lowRange', 'style': 'form', 'explode': True }})
    lr: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lr', 'style': 'form', 'explode': True }})
    num: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'num', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    or_terms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orTerms', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    related_site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relatedSite', 'style': 'form', 'explode': True }})
    rights: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    safe: Optional[SearchCseSiterestrictListSafeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe', 'style': 'form', 'explode': True }})
    search_type: Optional[SearchCseSiterestrictListSearchTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchType', 'style': 'form', 'explode': True }})
    site_search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'siteSearch', 'style': 'form', 'explode': True }})
    site_search_filter: Optional[SearchCseSiterestrictListSiteSearchFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'siteSearchFilter', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchCseSiterestrictListRequest:
    query_params: SearchCseSiterestrictListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchCseSiterestrictListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search: Optional[shared_search.Search] = dataclasses.field(default=None)
    
