import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatedescription as shared_certificatedescription
from ..shared import certificateconfig as shared_certificateconfig
from ..shared import revocationdetails as shared_revocationdetails

class CertificateSubjectModeEnum(str, Enum):
    SUBJECT_REQUEST_MODE_UNSPECIFIED = "SUBJECT_REQUEST_MODE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    REFLECTED_SPIFFE = "REFLECTED_SPIFFE"


@dataclass_json
@dataclasses.dataclass
class Certificate:
    r"""Certificate
    A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
    """
    
    certificate_description: Optional[shared_certificatedescription.CertificateDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    certificate_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplate') }})
    config: Optional[shared_certificateconfig.CertificateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    issuer_certificate_authority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerCertificateAuthority') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificate') }})
    pem_certificate_chain: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificateChain') }})
    pem_csr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCsr') }})
    revocation_details: Optional[shared_revocationdetails.RevocationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revocationDetails') }})
    subject_mode: Optional[CertificateSubjectModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectMode') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class CertificateInput:
    r"""CertificateInput
    A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
    """
    
    certificate_description: Optional[shared_certificatedescription.CertificateDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    certificate_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplate') }})
    config: Optional[shared_certificateconfig.CertificateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    pem_csr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCsr') }})
    revocation_details: Optional[shared_revocationdetails.RevocationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revocationDetails') }})
    subject_mode: Optional[CertificateSubjectModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectMode') }})
    
