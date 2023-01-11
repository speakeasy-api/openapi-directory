import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class PostAppsAppIDVersionsVersionStatusPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    
class PostAppsAppIDVersionsVersionStatusModifiedByEnum(str, Enum):
    DEVELOPER = "developer"
    ADMINISTRATOR = "administrator"

class PostAppsAppIDVersionsVersionStatusStatusEnum(str, Enum):
    IN_REVIEW = "inReview"
    APPROVED = "approved"
    SUSPENDED = "suspended"
    REJECTED = "rejected"


@dataclasses.dataclass
class PostAppsAppIDVersionsVersionStatusQueryParams:
    developer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    modified_by: Optional[PostAppsAppIDVersionsVersionStatusModifiedByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modifiedBy', 'style': 'form', 'explode': True }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    status: Optional[PostAppsAppIDVersionsVersionStatusStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAppsAppIDVersionsVersionStatusRequest:
    path_params: PostAppsAppIDVersionsVersionStatusPathParams = dataclasses.field()
    query_params: PostAppsAppIDVersionsVersionStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAppsAppIDVersionsVersionStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
