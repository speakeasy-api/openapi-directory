import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostCertificatesCreateCertificateRequestTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    domain_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    type: Optional[PostCertificatesCreateCertificateRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseNullableActionError:
    r"""PostCertificatesCreateCertificateResponseNullableActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseNullableActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostCertificatesCreateCertificateResponseNullableActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseNullableAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostCertificatesCreateCertificateResponseNullableActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostCertificatesCreateCertificateResponseNullableActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseCertificateStatusError:
    r"""PostCertificatesCreateCertificateResponseCertificateStatusError
    If issuance or renewal reports `failed`, this property contains information about what happened
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseCertificateStatus:
    r"""PostCertificatesCreateCertificateResponseCertificateStatus
    Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
    """
    
    error: Optional[PostCertificatesCreateCertificateResponseCertificateStatusError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    issuance: Optional[PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuance') }})
    renewal: Optional[PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal') }})
    
class PostCertificatesCreateCertificateResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseCertificateUsedBy:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponseCertificate:
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    domain_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_valid_after: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_after') }})
    not_valid_before: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_before') }})
    used_by: list[PostCertificatesCreateCertificateResponseCertificateUsedBy] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_by') }})
    status: Optional[PostCertificatesCreateCertificateResponseCertificateStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[PostCertificatesCreateCertificateResponseCertificateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCertificatesCreateCertificateResponse:
    certificate: PostCertificatesCreateCertificateResponseCertificate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    action: Optional[PostCertificatesCreateCertificateResponseNullableAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostCertificatesRequest:
    request: Optional[PostCertificatesCreateCertificateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCertificatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_certificate_response: Optional[PostCertificatesCreateCertificateResponse] = dataclasses.field(default=None)
    
