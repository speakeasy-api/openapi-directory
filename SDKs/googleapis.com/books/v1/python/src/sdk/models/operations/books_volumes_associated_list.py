import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import volumes as shared_volumes


@dataclasses.dataclass
class BooksVolumesAssociatedListPathParams:
    volume_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    
class BooksVolumesAssociatedListAssociationEnum(str, Enum):
    ASSOCIATION_UNDEFINED = "ASSOCIATION_UNDEFINED"
    END_OF_SAMPLE = "end-of-sample"
    END_OF_VOLUME = "end-of-volume"
    RELATED_FOR_PLAY = "related-for-play"

class BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum(str, Enum):
    MAX_ALLOWED_MATURITY_RATING_UNDEFINED = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    MATURE = "MATURE"
    NOT_MATURE = "not-mature"


@dataclasses.dataclass
class BooksVolumesAssociatedListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    association: Optional[BooksVolumesAssociatedListAssociationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'association', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_allowed_maturity_rating: Optional[BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxAllowedMaturityRating', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksVolumesAssociatedListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksVolumesAssociatedListRequest:
    path_params: BooksVolumesAssociatedListPathParams = dataclasses.field()
    query_params: BooksVolumesAssociatedListQueryParams = dataclasses.field()
    security: BooksVolumesAssociatedListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksVolumesAssociatedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volumes: Optional[shared_volumes.Volumes] = dataclasses.field(default=None)
    
