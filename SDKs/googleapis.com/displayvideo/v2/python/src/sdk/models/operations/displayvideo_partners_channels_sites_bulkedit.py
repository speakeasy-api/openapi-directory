import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import bulkeditsitesrequest as shared_bulkeditsitesrequest
from ..shared import bulkeditsitesresponse as shared_bulkeditsitesresponse


@dataclasses.dataclass
class DisplayvideoPartnersChannelsSitesBulkEditPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    partner_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partnerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisplayvideoPartnersChannelsSitesBulkEditQueryParams:
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
class DisplayvideoPartnersChannelsSitesBulkEditSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DisplayvideoPartnersChannelsSitesBulkEditRequest:
    path_params: DisplayvideoPartnersChannelsSitesBulkEditPathParams = dataclasses.field()
    query_params: DisplayvideoPartnersChannelsSitesBulkEditQueryParams = dataclasses.field()
    security: DisplayvideoPartnersChannelsSitesBulkEditSecurity = dataclasses.field()
    request: Optional[shared_bulkeditsitesrequest.BulkEditSitesRequestInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisplayvideoPartnersChannelsSitesBulkEditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_edit_sites_response: Optional[shared_bulkeditsitesresponse.BulkEditSitesResponse] = dataclasses.field(default=None)
    
