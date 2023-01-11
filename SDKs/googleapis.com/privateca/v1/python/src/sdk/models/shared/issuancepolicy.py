import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import issuancemodes as shared_issuancemodes
from ..shared import allowedkeytype as shared_allowedkeytype
from ..shared import x509parameters as shared_x509parameters
from ..shared import certificateidentityconstraints as shared_certificateidentityconstraints
from ..shared import certificateextensionconstraints as shared_certificateextensionconstraints


@dataclass_json
@dataclasses.dataclass
class IssuancePolicy:
    r"""IssuancePolicy
    Defines controls over all certificate issuance within a CaPool.
    """
    
    allowed_issuance_modes: Optional[shared_issuancemodes.IssuanceModes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIssuanceModes') }})
    allowed_key_types: Optional[list[shared_allowedkeytype.AllowedKeyType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedKeyTypes') }})
    baseline_values: Optional[shared_x509parameters.X509Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineValues') }})
    identity_constraints: Optional[shared_certificateidentityconstraints.CertificateIdentityConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConstraints') }})
    maximum_lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumLifetime') }})
    passthrough_extensions: Optional[shared_certificateextensionconstraints.CertificateExtensionConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughExtensions') }})
    
