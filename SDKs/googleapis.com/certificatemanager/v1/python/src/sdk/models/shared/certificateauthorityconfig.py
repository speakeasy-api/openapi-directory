import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateauthorityserviceconfig as shared_certificateauthorityserviceconfig


@dataclass_json
@dataclasses.dataclass
class CertificateAuthorityConfig:
    r"""CertificateAuthorityConfig
    The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
    """
    
    certificate_authority_service_config: Optional[shared_certificateauthorityserviceconfig.CertificateAuthorityServiceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorityServiceConfig') }})
    
