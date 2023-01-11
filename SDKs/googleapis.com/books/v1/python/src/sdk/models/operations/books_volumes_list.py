import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import volumes as shared_volumes

class BooksVolumesListDownloadEnum(str, Enum):
    DOWNLOAD_UNDEFINED = "DOWNLOAD_UNDEFINED"
    EPUB = "EPUB"

class BooksVolumesListFilterEnum(str, Enum):
    FILTER_UNDEFINED = "FILTER_UNDEFINED"
    EBOOKS = "ebooks"
    FREE_EBOOKS = "free-ebooks"
    FULL = "full"
    PAID_EBOOKS = "paid-ebooks"
    PARTIAL = "partial"

class BooksVolumesListLibraryRestrictEnum(str, Enum):
    LIBRARY_RESTRICT_UNDEFINED = "LIBRARY_RESTRICT_UNDEFINED"
    MY_LIBRARY = "my-library"
    NO_RESTRICT = "no-restrict"

class BooksVolumesListMaxAllowedMaturityRatingEnum(str, Enum):
    MAX_ALLOWED_MATURITY_RATING_UNDEFINED = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    MATURE = "MATURE"
    NOT_MATURE = "not-mature"

class BooksVolumesListOrderByEnum(str, Enum):
    ORDER_BY_UNDEFINED = "ORDER_BY_UNDEFINED"
    NEWEST = "newest"
    RELEVANCE = "relevance"

class BooksVolumesListPrintTypeEnum(str, Enum):
    PRINT_TYPE_UNDEFINED = "PRINT_TYPE_UNDEFINED"
    ALL = "ALL"
    BOOKS = "BOOKS"
    MAGAZINES = "MAGAZINES"

class BooksVolumesListProjectionEnum(str, Enum):
    PROJECTION_UNDEFINED = "PROJECTION_UNDEFINED"
    FULL = "FULL"
    LITE = "LITE"


@dataclasses.dataclass
class BooksVolumesListQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    download: Optional[BooksVolumesListDownloadEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[BooksVolumesListFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    lang_restrict: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'langRestrict', 'style': 'form', 'explode': True }})
    library_restrict: Optional[BooksVolumesListLibraryRestrictEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'libraryRestrict', 'style': 'form', 'explode': True }})
    max_allowed_maturity_rating: Optional[BooksVolumesListMaxAllowedMaturityRatingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxAllowedMaturityRating', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[BooksVolumesListOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    partner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partner', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    print_type: Optional[BooksVolumesListPrintTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printType', 'style': 'form', 'explode': True }})
    projection: Optional[BooksVolumesListProjectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_preorders: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showPreorders', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksVolumesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksVolumesListRequest:
    query_params: BooksVolumesListQueryParams = dataclasses.field()
    security: BooksVolumesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksVolumesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volumes: Optional[shared_volumes.Volumes] = dataclasses.field(default=None)
    
