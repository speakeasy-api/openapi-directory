import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import bucket as shared_bucket


@dataclasses.dataclass
class StorageBucketsLockRetentionPolicyPathParams:
    bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicyQueryParams:
    if_metageneration_match: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ifMetagenerationMatch', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicySecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicySecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicySecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicySecurity:
    option1: Optional[StorageBucketsLockRetentionPolicySecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageBucketsLockRetentionPolicySecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageBucketsLockRetentionPolicySecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicyRequest:
    path_params: StorageBucketsLockRetentionPolicyPathParams = dataclasses.field()
    query_params: StorageBucketsLockRetentionPolicyQueryParams = dataclasses.field()
    security: StorageBucketsLockRetentionPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class StorageBucketsLockRetentionPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bucket: Optional[shared_bucket.Bucket] = dataclasses.field(default=None)
    
