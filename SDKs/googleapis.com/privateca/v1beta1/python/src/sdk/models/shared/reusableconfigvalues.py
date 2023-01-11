import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import x509extension as shared_x509extension
from ..shared import caoptions as shared_caoptions
from ..shared import keyusage as shared_keyusage
from ..shared import objectid as shared_objectid


@dataclass_json
@dataclasses.dataclass
class ReusableConfigValues:
    r"""ReusableConfigValues
    A ReusableConfigValues is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
    """
    
    additional_extensions: Optional[list[shared_x509extension.X509Extension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalExtensions') }})
    aia_ocsp_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aiaOcspServers') }})
    ca_options: Optional[shared_caoptions.CaOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caOptions') }})
    key_usage: Optional[shared_keyusage.KeyUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyUsage') }})
    policy_ids: Optional[list[shared_objectid.ObjectID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyIds') }})
    
