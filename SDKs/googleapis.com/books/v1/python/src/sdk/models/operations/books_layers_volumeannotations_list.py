import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import volumeannotations as shared_volumeannotations


@dataclasses.dataclass
class BooksLayersVolumeAnnotationsListPathParams:
    layer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'layerId', 'style': 'simple', 'explode': False }})
    volume_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BooksLayersVolumeAnnotationsListQueryParams:
    content_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'contentVersion', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endOffset', 'style': 'form', 'explode': True }})
    end_position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endPosition', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start_offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startOffset', 'style': 'form', 'explode': True }})
    start_position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startPosition', 'style': 'form', 'explode': True }})
    updated_max: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedMax', 'style': 'form', 'explode': True }})
    updated_min: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedMin', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    volume_annotations_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'volumeAnnotationsVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksLayersVolumeAnnotationsListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksLayersVolumeAnnotationsListRequest:
    path_params: BooksLayersVolumeAnnotationsListPathParams = dataclasses.field()
    query_params: BooksLayersVolumeAnnotationsListQueryParams = dataclasses.field()
    security: BooksLayersVolumeAnnotationsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksLayersVolumeAnnotationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volumeannotations: Optional[shared_volumeannotations.Volumeannotations] = dataclasses.field(default=None)
    
