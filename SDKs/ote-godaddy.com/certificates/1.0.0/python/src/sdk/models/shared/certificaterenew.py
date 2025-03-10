"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CertificateRenewRootTypeEnum(str, Enum):
    r"""Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date"""
    GODADDY_SHA_1 = 'GODADDY_SHA_1'
    GODADDY_SHA_2 = 'GODADDY_SHA_2'
    STARFIELD_SHA_1 = 'STARFIELD_SHA_1'
    STARFIELD_SHA_2 = 'STARFIELD_SHA_2'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CertificateRenew:
    r"""The renew request info"""
    
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('callbackUrl'), 'exclude': lambda f: f is None }})
    r"""Required if client would like to receive stateful actions via callback during certificate lifecyle"""  
    common_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('commonName'), 'exclude': lambda f: f is None }})
    r"""The common name of certificate to be secured"""  
    csr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('csr'), 'exclude': lambda f: f is None }})
    r"""Certificate Signing Request."""  
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('period'), 'exclude': lambda f: f is None }})
    r"""Number of years for certificate validity period, if different from previous certificate"""  
    root_type: Optional[CertificateRenewRootTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rootType'), 'exclude': lambda f: f is None }})
    r"""Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date"""  
    subject_alternative_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subjectAlternativeNames'), 'exclude': lambda f: f is None }})
    r"""Only used for UCC products. An array of subject alternative names to include in certificate. Not including a subject alternative name that was in the previous certificate will remove it from the renewed certificate."""  
    