import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security

class AndroidpublisherEditsImagesDeleteImageTypeEnum(str, Enum):
    FEATURE_GRAPHIC = "featureGraphic"
    ICON = "icon"
    PHONE_SCREENSHOTS = "phoneScreenshots"
    PROMO_GRAPHIC = "promoGraphic"
    SEVEN_INCH_SCREENSHOTS = "sevenInchScreenshots"
    TEN_INCH_SCREENSHOTS = "tenInchScreenshots"
    TV_BANNER = "tvBanner"
    TV_SCREENSHOTS = "tvScreenshots"
    WEAR_SCREENSHOTS = "wearScreenshots"


@dataclasses.dataclass
class AndroidpublisherEditsImagesDeletePathParams:
    edit_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    image_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    image_type: AndroidpublisherEditsImagesDeleteImageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    language: str = dataclasses.field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AndroidpublisherEditsImagesDeleteQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AndroidpublisherEditsImagesDeleteSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AndroidpublisherEditsImagesDeleteRequest:
    path_params: AndroidpublisherEditsImagesDeletePathParams = dataclasses.field()
    query_params: AndroidpublisherEditsImagesDeleteQueryParams = dataclasses.field()
    security: AndroidpublisherEditsImagesDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AndroidpublisherEditsImagesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
