import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowedconfiglist as shared_allowedconfiglist
from ..shared import issuancemodes as shared_issuancemodes
from ..shared import subject as shared_subject
from ..shared import allowedsubjectaltnames as shared_allowedsubjectaltnames
from ..shared import reusableconfigwrapper as shared_reusableconfigwrapper


@dataclass_json
@dataclasses.dataclass
class CertificateAuthorityPolicy:
    r"""CertificateAuthorityPolicy
    The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
    """
    
    allowed_common_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedCommonNames') }})
    allowed_config_list: Optional[shared_allowedconfiglist.AllowedConfigList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedConfigList') }})
    allowed_issuance_modes: Optional[shared_issuancemodes.IssuanceModes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIssuanceModes') }})
    allowed_locations_and_organizations: Optional[list[shared_subject.Subject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedLocationsAndOrganizations') }})
    allowed_sans: Optional[shared_allowedsubjectaltnames.AllowedSubjectAltNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedSans') }})
    maximum_lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumLifetime') }})
    overwrite_config_values: Optional[shared_reusableconfigwrapper.ReusableConfigWrapper] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwriteConfigValues') }})
    
