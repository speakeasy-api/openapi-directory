import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import object as shared_object


@dataclasses.dataclass
class StorageObjectsCopyPathParams:
    destination_bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destinationBucket', 'style': 'simple', 'explode': False }})
    destination_object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destinationObject', 'style': 'simple', 'explode': False }})
    source_bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceBucket', 'style': 'simple', 'explode': False }})
    source_object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceObject', 'style': 'simple', 'explode': False }})
    
class StorageObjectsCopyProjectionEnum(str, Enum):
    FULL = "full"
    NO_ACL = "noAcl"


@dataclasses.dataclass
class StorageObjectsCopyQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
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
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[StorageObjectsCopyProjectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source_generation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceGeneration', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StorageObjectsCopySecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsCopySecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageObjectsCopySecurity:
    option1: Optional[StorageObjectsCopySecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageObjectsCopySecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class StorageObjectsCopyRequest:
    path_params: StorageObjectsCopyPathParams = dataclasses.field()
    query_params: StorageObjectsCopyQueryParams = dataclasses.field()
    security: StorageObjectsCopySecurity = dataclasses.field()
    request: Optional[shared_object.Object] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StorageObjectsCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    object: Optional[shared_object.Object] = dataclasses.field(default=None)
    
