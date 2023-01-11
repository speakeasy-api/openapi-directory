import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import eventtagslistresponse as shared_eventtagslistresponse


@dataclasses.dataclass
class DfareportingEventTagsListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingEventTagsListEventTagTypesEnum(str, Enum):
    IMPRESSION_IMAGE_EVENT_TAG = "IMPRESSION_IMAGE_EVENT_TAG"
    IMPRESSION_JAVASCRIPT_EVENT_TAG = "IMPRESSION_JAVASCRIPT_EVENT_TAG"
    CLICK_THROUGH_EVENT_TAG = "CLICK_THROUGH_EVENT_TAG"

class DfareportingEventTagsListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingEventTagsListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclasses.dataclass
class DfareportingEventTagsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    ad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'adId', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignId', 'style': 'form', 'explode': True }})
    definitions_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'definitionsOnly', 'style': 'form', 'explode': True }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    event_tag_types: Optional[list[DfareportingEventTagsListEventTagTypesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventTagTypes', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingEventTagsListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingEventTagsListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingEventTagsListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingEventTagsListRequest:
    path_params: DfareportingEventTagsListPathParams = dataclasses.field()
    query_params: DfareportingEventTagsListQueryParams = dataclasses.field()
    security: DfareportingEventTagsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingEventTagsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_tags_list_response: Optional[shared_eventtagslistresponse.EventTagsListResponse] = dataclasses.field(default=None)
    
