import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutCertificatesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutCertificatesIDUpdateCertificateRequest:
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutCertificatesIDCertificateResponseCertificateStatusError:
    r"""PutCertificatesIDCertificateResponseCertificateStatusError
    If issuance or renewal reports `failed`, this property contains information about what happened
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class PutCertificatesIDCertificateResponseCertificateStatus:
    r"""PutCertificatesIDCertificateResponseCertificateStatus
    Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
    """
    
    error: Optional[PutCertificatesIDCertificateResponseCertificateStatusError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    issuance: Optional[PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuance') }})
    renewal: Optional[PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal') }})
    
class PutCertificatesIDCertificateResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclasses.dataclass
class PutCertificatesIDCertificateResponseCertificateUsedBy:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PutCertificatesIDCertificateResponseCertificate:
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    domain_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_valid_after: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_after') }})
    not_valid_before: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_before') }})
    used_by: list[PutCertificatesIDCertificateResponseCertificateUsedBy] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_by') }})
    status: Optional[PutCertificatesIDCertificateResponseCertificateStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[PutCertificatesIDCertificateResponseCertificateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PutCertificatesIDCertificateResponse:
    certificate: PutCertificatesIDCertificateResponseCertificate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    

@dataclasses.dataclass
class PutCertificatesIDRequest:
    path_params: PutCertificatesIDPathParams = dataclasses.field()
    request: Optional[PutCertificatesIDUpdateCertificateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCertificatesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_response: Optional[PutCertificatesIDCertificateResponse] = dataclasses.field(default=None)
    
