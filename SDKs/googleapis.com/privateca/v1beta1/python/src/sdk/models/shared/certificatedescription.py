import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyid as shared_keyid
from ..shared import certificatefingerprint as shared_certificatefingerprint
from ..shared import reusableconfigvalues as shared_reusableconfigvalues
from ..shared import publickey as shared_publickey
from ..shared import subjectdescription as shared_subjectdescription


@dataclass_json
@dataclasses.dataclass
class CertificateDescription:
    r"""CertificateDescription
    A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
    """
    
    aia_issuing_certificate_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aiaIssuingCertificateUrls') }})
    authority_key_id: Optional[shared_keyid.KeyID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorityKeyId') }})
    cert_fingerprint: Optional[shared_certificatefingerprint.CertificateFingerprint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certFingerprint') }})
    config_values: Optional[shared_reusableconfigvalues.ReusableConfigValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configValues') }})
    crl_distribution_points: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crlDistributionPoints') }})
    public_key: Optional[shared_publickey.PublicKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    subject_description: Optional[shared_subjectdescription.SubjectDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectDescription') }})
    subject_key_id: Optional[shared_keyid.KeyID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectKeyId') }})
    
