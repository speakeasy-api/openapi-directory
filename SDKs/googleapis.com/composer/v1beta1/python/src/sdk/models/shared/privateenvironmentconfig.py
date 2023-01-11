import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkingconfig as shared_networkingconfig
from ..shared import privateclusterconfig as shared_privateclusterconfig
from ..shared import privateclusterconfig as shared_privateclusterconfig


@dataclass_json
@dataclasses.dataclass
class PrivateEnvironmentConfigInput:
    r"""PrivateEnvironmentConfigInput
    The configuration information for configuring a Private IP Cloud Composer environment.
    """
    
    cloud_composer_connection_subnetwork: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudComposerConnectionSubnetwork') }})
    cloud_composer_network_ipv4_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudComposerNetworkIpv4CidrBlock') }})
    cloud_sql_ipv4_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlIpv4CidrBlock') }})
    enable_private_environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateEnvironment') }})
    enable_privately_used_public_ips: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivatelyUsedPublicIps') }})
    networking_config: Optional[shared_networkingconfig.NetworkingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkingConfig') }})
    private_cluster_config: Optional[shared_privateclusterconfig.PrivateClusterConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateClusterConfig') }})
    web_server_ipv4_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerIpv4CidrBlock') }})
    

@dataclass_json
@dataclasses.dataclass
class PrivateEnvironmentConfig:
    r"""PrivateEnvironmentConfig
    The configuration information for configuring a Private IP Cloud Composer environment.
    """
    
    cloud_composer_connection_subnetwork: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudComposerConnectionSubnetwork') }})
    cloud_composer_network_ipv4_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudComposerNetworkIpv4CidrBlock') }})
    cloud_composer_network_ipv4_reserved_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudComposerNetworkIpv4ReservedRange') }})
    cloud_sql_ipv4_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlIpv4CidrBlock') }})
    enable_private_environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateEnvironment') }})
    enable_privately_used_public_ips: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivatelyUsedPublicIps') }})
    networking_config: Optional[shared_networkingconfig.NetworkingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkingConfig') }})
    private_cluster_config: Optional[shared_privateclusterconfig.PrivateClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateClusterConfig') }})
    web_server_ipv4_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerIpv4CidrBlock') }})
    web_server_ipv4_reserved_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerIpv4ReservedRange') }})
    
