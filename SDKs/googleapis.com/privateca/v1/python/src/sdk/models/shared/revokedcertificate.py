"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class RevokedCertificateRevocationReasonEnum(str, Enum):
    r"""The reason the Certificate was revoked."""
    REVOCATION_REASON_UNSPECIFIED = 'REVOCATION_REASON_UNSPECIFIED'
    KEY_COMPROMISE = 'KEY_COMPROMISE'
    CERTIFICATE_AUTHORITY_COMPROMISE = 'CERTIFICATE_AUTHORITY_COMPROMISE'
    AFFILIATION_CHANGED = 'AFFILIATION_CHANGED'
    SUPERSEDED = 'SUPERSEDED'
    CESSATION_OF_OPERATION = 'CESSATION_OF_OPERATION'
    CERTIFICATE_HOLD = 'CERTIFICATE_HOLD'
    PRIVILEGE_WITHDRAWN = 'PRIVILEGE_WITHDRAWN'
    ATTRIBUTE_AUTHORITY_COMPROMISE = 'ATTRIBUTE_AUTHORITY_COMPROMISE'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RevokedCertificate:
    r"""Describes a revoked Certificate."""
    
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('certificate'), 'exclude': lambda f: f is None }})
    r"""The resource name for the Certificate in the format `projects/*/locations/*/caPools/*/certificates/*`."""  
    hex_serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hexSerialNumber'), 'exclude': lambda f: f is None }})
    r"""The serial number of the Certificate."""  
    revocation_reason: Optional[RevokedCertificateRevocationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('revocationReason'), 'exclude': lambda f: f is None }})
    r"""The reason the Certificate was revoked."""  
    