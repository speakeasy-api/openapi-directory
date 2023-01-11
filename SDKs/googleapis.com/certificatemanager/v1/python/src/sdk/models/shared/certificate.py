import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedcertificate as shared_managedcertificate
from ..shared import selfmanagedcertificate as shared_selfmanagedcertificate
from ..shared import managedcertificate as shared_managedcertificate

class CertificateScopeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    EDGE_CACHE = "EDGE_CACHE"


@dataclass_json
@dataclasses.dataclass
class Certificate:
    r"""Certificate
    Defines TLS certificate.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed: Optional[shared_managedcertificate.ManagedCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificate') }})
    san_dnsnames: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sanDnsnames') }})
    scope: Optional[CertificateScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    self_managed: Optional[shared_selfmanagedcertificate.SelfManagedCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfManaged') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class CertificateInput:
    r"""CertificateInput
    Defines TLS certificate.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed: Optional[shared_managedcertificate.ManagedCertificateInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scope: Optional[CertificateScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    self_managed: Optional[shared_selfmanagedcertificate.SelfManagedCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfManaged') }})
    
