import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kerberosconfig as shared_kerberosconfig


@dataclass_json
@dataclasses.dataclass
class HiveMetastoreConfig:
    r"""HiveMetastoreConfig
    Specifies configuration information specific to running Hive metastore software as the metastore service.
    """
    
    config_overrides: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    kerberos_config: Optional[shared_kerberosconfig.KerberosConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kerberosConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
