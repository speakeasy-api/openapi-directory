import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificate as shared_certificate
from ..shared import certificate as shared_certificate


@dataclass_json
@dataclasses.dataclass
class ServiceResolver:
    r"""ServiceResolver
    A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
    """
    
    endpoint_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointFilter') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    server_certificates: Optional[list[shared_certificate.Certificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificates') }})
    service_directory_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryService') }})
    

@dataclass_json
@dataclasses.dataclass
class ServiceResolverInput:
    r"""ServiceResolverInput
    A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
    """
    
    endpoint_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointFilter') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    server_certificates: Optional[list[shared_certificate.CertificateInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificates') }})
    service_directory_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryService') }})
    
