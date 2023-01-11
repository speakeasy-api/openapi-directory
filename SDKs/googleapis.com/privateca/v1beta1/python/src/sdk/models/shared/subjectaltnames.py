import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import x509extension as shared_x509extension


@dataclass_json
@dataclasses.dataclass
class SubjectAltNames:
    r"""SubjectAltNames
    SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the \"common name\" in the distinguished name).
    """
    
    custom_sans: Optional[list[shared_x509extension.X509Extension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSans') }})
    dns_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNames') }})
    email_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    ip_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    
