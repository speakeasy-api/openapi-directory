import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googlesecuritysafebrowsingv4fetchthreatlistupdatesrequest as shared_googlesecuritysafebrowsingv4fetchthreatlistupdatesrequest
from ..shared import googlesecuritysafebrowsingv4fetchthreatlistupdatesresponse as shared_googlesecuritysafebrowsingv4fetchthreatlistupdatesresponse


@dataclasses.dataclass
class SafebrowsingThreatListUpdatesFetchQueryParams:
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
class SafebrowsingThreatListUpdatesFetchRequest:
    query_params: SafebrowsingThreatListUpdatesFetchQueryParams = dataclasses.field()
    request: Optional[shared_googlesecuritysafebrowsingv4fetchthreatlistupdatesrequest.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SafebrowsingThreatListUpdatesFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_security_safebrowsing_v4_fetch_threat_list_updates_response: Optional[shared_googlesecuritysafebrowsingv4fetchthreatlistupdatesresponse.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse] = dataclasses.field(default=None)
    
