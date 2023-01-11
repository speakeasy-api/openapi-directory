import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subordinateconfigchain as shared_subordinateconfigchain


@dataclass_json
@dataclasses.dataclass
class SubordinateConfig:
    r"""SubordinateConfig
    Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
    """
    
    certificate_authority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthority') }})
    pem_issuer_chain: Optional[shared_subordinateconfigchain.SubordinateConfigChain] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemIssuerChain') }})
    
