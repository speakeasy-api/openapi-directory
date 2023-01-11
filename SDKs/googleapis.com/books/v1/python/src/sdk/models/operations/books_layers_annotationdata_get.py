import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import dictionaryannotationdata as shared_dictionaryannotationdata


@dataclasses.dataclass
class BooksLayersAnnotationDataGetPathParams:
    annotation_data_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'annotationDataId', 'style': 'simple', 'explode': False }})
    layer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'layerId', 'style': 'simple', 'explode': False }})
    volume_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BooksLayersAnnotationDataGetQueryParams:
    content_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'contentVersion', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    allow_web_definitions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowWebDefinitions', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    h: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'h', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    scale: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scale', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    w: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'w', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksLayersAnnotationDataGetSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksLayersAnnotationDataGetRequest:
    path_params: BooksLayersAnnotationDataGetPathParams = dataclasses.field()
    query_params: BooksLayersAnnotationDataGetQueryParams = dataclasses.field()
    security: BooksLayersAnnotationDataGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksLayersAnnotationDataGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dictionary_annotationdata: Optional[shared_dictionaryannotationdata.DictionaryAnnotationdata] = dataclasses.field(default=None)
    
