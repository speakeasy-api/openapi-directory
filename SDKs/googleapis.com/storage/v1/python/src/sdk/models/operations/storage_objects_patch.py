import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import object as shared_object


@dataclasses.dataclass
class StorageObjectsPatchPathParams:
    bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    
class StorageObjectsPatchPredefinedACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    BUCKET_OWNER_FULL_CONTROL = "bucketOwnerFullControl"
    BUCKET_OWNER_READ = "bucketOwnerRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"

class StorageObjectsPatchProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclasses.dataclass
class StorageObjectsPatchQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    generation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'generation', 'style': 'form', 'explode': True }})
    if_generation_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationMatch', 'style': 'form', 'explode': True }})
    if_generation_not_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    predefined_acl: Optional[StorageObjectsPatchPredefinedACLEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'predefinedAcl', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsPatchProjectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StorageObjectsPatchSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsPatchSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsPatchSecurity:
    option1: Optional[StorageObjectsPatchSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsPatchSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class StorageObjectsPatchRequest:
    path_params: StorageObjectsPatchPathParams = dataclasses.field()
    query_params: StorageObjectsPatchQueryParams = dataclasses.field()
    security: StorageObjectsPatchSecurity = dataclasses.field()
    request: Optional[shared_object.Object] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StorageObjectsPatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    object: Optional[shared_object.Object] = dataclasses.field(default=None)
    
