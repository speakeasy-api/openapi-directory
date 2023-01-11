import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publickey as shared_publickey
from ..shared import subjectconfig as shared_subjectconfig
from ..shared import x509parameters as shared_x509parameters


@dataclass_json
@dataclasses.dataclass
class CertificateConfig:
    r"""CertificateConfig
    A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
    """
    
    public_key: Optional[shared_publickey.PublicKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    subject_config: Optional[shared_subjectconfig.SubjectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectConfig') }})
    x509_config: Optional[shared_x509parameters.X509Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509Config') }})
    
