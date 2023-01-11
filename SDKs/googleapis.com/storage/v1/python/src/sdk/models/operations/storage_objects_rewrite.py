import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import object as shared_object
from ..shared import rewriteresponse as shared_rewriteresponse


@dataclasses.dataclass
class StorageObjectsRewritePathParams:
    destination_bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destinationBucket', 'style': 'simple', 'explode': False }})
    destination_object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destinationObject', 'style': 'simple', 'explode': False }})
    source_bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceBucket', 'style': 'simple', 'explode': False }})
    source_object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceObject', 'style': 'simple', 'explode': False }})
    
class StorageObjectsRewriteDestinationPredefinedACLEnum(str, Enum):
    AUTHENTICATED_READ = "authenticatedRead"
    BUCKET_OWNER_FULL_CONTROL = "bucketOwnerFullControl"
    BUCKET_OWNER_READ = "bucketOwnerRead"
    PRIVATE = "private"
    PROJECT_PRIVATE = "projectPrivate"
    PUBLIC_READ = "publicRead"

class StorageObjectsRewriteProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclasses.dataclass
class StorageObjectsRewriteQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    destination_kms_key_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destinationKmsKeyName', 'style': 'form', 'explode': True }})
    destination_predefined_acl: Optional[StorageObjectsRewriteDestinationPredefinedACLEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destinationPredefinedAcl', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    if_generation_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationMatch', 'style': 'form', 'explode': True }})
    if_generation_not_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_metageneration_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_metageneration_not_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    if_source_generation_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifSourceGenerationMatch', 'style': 'form', 'explode': True }})
    if_source_generation_not_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifSourceGenerationNotMatch', 'style': 'form', 'explode': True }})
    if_source_metageneration_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifSourceMetagenerationMatch', 'style': 'form', 'explode': True }})
    if_source_metageneration_not_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifSourceMetagenerationNotMatch', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_bytes_rewritten_per_call: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxBytesRewrittenPerCall', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsRewriteProjectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    rewrite_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rewriteToken', 'style': 'form', 'explode': True }})
    source_generation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceGeneration', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StorageObjectsRewriteSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsRewriteSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsRewriteSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsRewriteSecurity:
    option1: Optional[StorageObjectsRewriteSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsRewriteSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageObjectsRewriteSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class StorageObjectsRewriteRequest:
    path_params: StorageObjectsRewritePathParams = dataclasses.field()
    query_params: StorageObjectsRewriteQueryParams = dataclasses.field()
    security: StorageObjectsRewriteSecurity = dataclasses.field()
    request: Optional[shared_object.Object] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StorageObjectsRewriteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rewrite_response: Optional[shared_rewriteresponse.RewriteResponse] = dataclasses.field(default=None)
    
