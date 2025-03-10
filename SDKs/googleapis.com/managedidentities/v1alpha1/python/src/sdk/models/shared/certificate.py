"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Certificate:
    r"""Certificate used to configure LDAPS."""
    
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('expireTime'), 'exclude': lambda f: f is None }})
    r"""The certificate expire time."""  
    issuing_certificate: Optional[Certificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('issuingCertificate'), 'exclude': lambda f: f is None }})
    r"""Certificate used to configure LDAPS."""  
    subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subject'), 'exclude': lambda f: f is None }})
    r"""The certificate subject."""  
    subject_alternative_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subjectAlternativeName'), 'exclude': lambda f: f is None }})
    r"""The additional hostnames for the domain."""  
    thumbprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('thumbprint'), 'exclude': lambda f: f is None }})
    r"""The certificate thumbprint which uniquely identifies the certificate."""  
    