import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databaseconfig as shared_databaseconfig
from ..shared import encryptionconfig as shared_encryptionconfig
from ..shared import maintenancewindow as shared_maintenancewindow
from ..shared import masterauthorizednetworksconfig as shared_masterauthorizednetworksconfig
from ..shared import nodeconfig as shared_nodeconfig
from ..shared import privateenvironmentconfig as shared_privateenvironmentconfig
from ..shared import recoveryconfig as shared_recoveryconfig
from ..shared import softwareconfig as shared_softwareconfig
from ..shared import webserverconfig as shared_webserverconfig
from ..shared import webservernetworkaccesscontrol as shared_webservernetworkaccesscontrol
from ..shared import workloadsconfig as shared_workloadsconfig
from ..shared import privateenvironmentconfig as shared_privateenvironmentconfig

class EnvironmentConfigEnvironmentSizeEnum(str, Enum):
    ENVIRONMENT_SIZE_UNSPECIFIED = "ENVIRONMENT_SIZE_UNSPECIFIED"
    ENVIRONMENT_SIZE_SMALL = "ENVIRONMENT_SIZE_SMALL"
    ENVIRONMENT_SIZE_MEDIUM = "ENVIRONMENT_SIZE_MEDIUM"
    ENVIRONMENT_SIZE_LARGE = "ENVIRONMENT_SIZE_LARGE"


@dataclass_json
@dataclasses.dataclass
class EnvironmentConfigInput:
    r"""EnvironmentConfigInput
    Configuration information for an environment.
    """
    
    database_config: Optional[shared_databaseconfig.DatabaseConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseConfig') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    environment_size: Optional[EnvironmentConfigEnvironmentSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentSize') }})
    maintenance_window: Optional[shared_maintenancewindow.MaintenanceWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    master_authorized_networks_config: Optional[shared_masterauthorizednetworksconfig.MasterAuthorizedNetworksConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuthorizedNetworksConfig') }})
    node_config: Optional[shared_nodeconfig.NodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    private_environment_config: Optional[shared_privateenvironmentconfig.PrivateEnvironmentConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateEnvironmentConfig') }})
    recovery_config: Optional[shared_recoveryconfig.RecoveryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryConfig') }})
    software_config: Optional[shared_softwareconfig.SoftwareConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    web_server_config: Optional[shared_webserverconfig.WebServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerConfig') }})
    web_server_network_access_control: Optional[shared_webservernetworkaccesscontrol.WebServerNetworkAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerNetworkAccessControl') }})
    workloads_config: Optional[shared_workloadsconfig.WorkloadsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadsConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class EnvironmentConfig:
    r"""EnvironmentConfig
    Configuration information for an environment.
    """
    
    airflow_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airflowUri') }})
    dag_gcs_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagGcsPrefix') }})
    database_config: Optional[shared_databaseconfig.DatabaseConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseConfig') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    environment_size: Optional[EnvironmentConfigEnvironmentSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentSize') }})
    gke_cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeCluster') }})
    maintenance_window: Optional[shared_maintenancewindow.MaintenanceWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    master_authorized_networks_config: Optional[shared_masterauthorizednetworksconfig.MasterAuthorizedNetworksConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuthorizedNetworksConfig') }})
    node_config: Optional[shared_nodeconfig.NodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    private_environment_config: Optional[shared_privateenvironmentconfig.PrivateEnvironmentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateEnvironmentConfig') }})
    recovery_config: Optional[shared_recoveryconfig.RecoveryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryConfig') }})
    software_config: Optional[shared_softwareconfig.SoftwareConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    web_server_config: Optional[shared_webserverconfig.WebServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerConfig') }})
    web_server_network_access_control: Optional[shared_webservernetworkaccesscontrol.WebServerNetworkAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerNetworkAccessControl') }})
    workloads_config: Optional[shared_workloadsconfig.WorkloadsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadsConfig') }})
    
