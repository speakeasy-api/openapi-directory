import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listdirectorypeopleresponse as shared_listdirectorypeopleresponse

class PeoplePeopleListDirectoryPeopleMergeSourcesEnum(str, Enum):
    DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED"
    DIRECTORY_MERGE_SOURCE_TYPE_CONTACT = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"

class PeoplePeopleListDirectoryPeopleSourcesEnum(str, Enum):
    DIRECTORY_SOURCE_TYPE_UNSPECIFIED = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
    DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
    DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"


@dataclasses.dataclass
class PeoplePeopleListDirectoryPeopleQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    merge_sources: Optional[list[PeoplePeopleListDirectoryPeopleMergeSourcesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mergeSources', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_mask: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'readMask', 'style': 'form', 'explode': True }})
    request_sync_token: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requestSyncToken', 'style': 'form', 'explode': True }})
    sources: Optional[list[PeoplePeopleListDirectoryPeopleSourcesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PeoplePeopleListDirectoryPeopleSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PeoplePeopleListDirectoryPeopleRequest:
    query_params: PeoplePeopleListDirectoryPeopleQueryParams = dataclasses.field()
    security: PeoplePeopleListDirectoryPeopleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PeoplePeopleListDirectoryPeopleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_directory_people_response: Optional[shared_listdirectorypeopleresponse.ListDirectoryPeopleResponse] = dataclasses.field(default=None)
    
