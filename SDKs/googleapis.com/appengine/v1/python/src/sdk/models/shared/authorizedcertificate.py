import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificaterawdata as shared_certificaterawdata
from ..shared import managedcertificate as shared_managedcertificate


@dataclass_json
@dataclasses.dataclass
class AuthorizedCertificate:
    r"""AuthorizedCertificate
    An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
    """
    
    certificate_raw_data: Optional[shared_certificaterawdata.CertificateRawData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateRawData') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domain_mappings_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMappingsCount') }})
    domain_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNames') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    managed_certificate: Optional[shared_managedcertificate.ManagedCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCertificate') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    visible_domain_mappings: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleDomainMappings') }})
    
