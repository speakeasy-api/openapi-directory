import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auxiliaryversionconfig as shared_auxiliaryversionconfig
from ..shared import kerberosconfig as shared_kerberosconfig
from ..shared import auxiliaryversionconfig as shared_auxiliaryversionconfig

class HiveMetastoreConfigEndpointProtocolEnum(str, Enum):
    ENDPOINT_PROTOCOL_UNSPECIFIED = "ENDPOINT_PROTOCOL_UNSPECIFIED"
    THRIFT = "THRIFT"
    GRPC = "GRPC"


@dataclass_json
@dataclasses.dataclass
class HiveMetastoreConfig:
    r"""HiveMetastoreConfig
    Specifies configuration information specific to running Hive metastore software as the metastore service.
    """
    
    auxiliary_versions: Optional[dict[str, shared_auxiliaryversionconfig.AuxiliaryVersionConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryVersions') }})
    config_overrides: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    endpoint_protocol: Optional[HiveMetastoreConfigEndpointProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointProtocol') }})
    kerberos_config: Optional[shared_kerberosconfig.KerberosConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kerberosConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class HiveMetastoreConfigInput:
    r"""HiveMetastoreConfigInput
    Specifies configuration information specific to running Hive metastore software as the metastore service.
    """
    
    auxiliary_versions: Optional[dict[str, shared_auxiliaryversionconfig.AuxiliaryVersionConfigInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryVersions') }})
    config_overrides: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    endpoint_protocol: Optional[HiveMetastoreConfigEndpointProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointProtocol') }})
    kerberos_config: Optional[shared_kerberosconfig.KerberosConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kerberosConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
