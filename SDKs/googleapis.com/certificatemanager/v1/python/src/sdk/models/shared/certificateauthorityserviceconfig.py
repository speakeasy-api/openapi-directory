import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CertificateAuthorityServiceConfig:
    r"""CertificateAuthorityServiceConfig
    Contains information required to contact CA service.
    """
    
    ca_pool: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caPool') }})
    
