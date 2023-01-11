import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectid as shared_objectid

class CertificateExtensionConstraintsKnownExtensionsEnum(str, Enum):
    KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED = "KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED"
    BASE_KEY_USAGE = "BASE_KEY_USAGE"
    EXTENDED_KEY_USAGE = "EXTENDED_KEY_USAGE"
    CA_OPTIONS = "CA_OPTIONS"
    POLICY_IDS = "POLICY_IDS"
    AIA_OCSP_SERVERS = "AIA_OCSP_SERVERS"


@dataclass_json
@dataclasses.dataclass
class CertificateExtensionConstraints:
    r"""CertificateExtensionConstraints
    Describes a set of X.509 extensions that may be part of some certificate issuance controls.
    """
    
    additional_extensions: Optional[list[shared_objectid.ObjectID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalExtensions') }})
    known_extensions: Optional[list[CertificateExtensionConstraintsKnownExtensionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownExtensions') }})
    
