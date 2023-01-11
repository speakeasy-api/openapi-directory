import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SslSettingsSslManagementTypeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


@dataclass_json
@dataclasses.dataclass
class SslSettings:
    r"""SslSettings
    SSL configuration for a DomainMapping resource.
    """
    
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    pending_managed_certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingManagedCertificateId') }})
    ssl_management_type: Optional[SslSettingsSslManagementTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslManagementType') }})
    
