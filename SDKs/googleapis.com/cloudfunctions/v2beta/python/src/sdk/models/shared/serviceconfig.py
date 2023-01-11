import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secretenvvar as shared_secretenvvar
from ..shared import secretvolume as shared_secretvolume

class ServiceConfigIngressSettingsEnum(str, Enum):
    INGRESS_SETTINGS_UNSPECIFIED = "INGRESS_SETTINGS_UNSPECIFIED"
    ALLOW_ALL = "ALLOW_ALL"
    ALLOW_INTERNAL_ONLY = "ALLOW_INTERNAL_ONLY"
    ALLOW_INTERNAL_AND_GCLB = "ALLOW_INTERNAL_AND_GCLB"

class ServiceConfigSecurityLevelEnum(str, Enum):
    SECURITY_LEVEL_UNSPECIFIED = "SECURITY_LEVEL_UNSPECIFIED"
    SECURE_ALWAYS = "SECURE_ALWAYS"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"

class ServiceConfigVpcConnectorEgressSettingsEnum(str, Enum):
    VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    PRIVATE_RANGES_ONLY = "PRIVATE_RANGES_ONLY"
    ALL_TRAFFIC = "ALL_TRAFFIC"


@dataclass_json
@dataclasses.dataclass
class ServiceConfigInput:
    r"""ServiceConfigInput
    Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
    """
    
    all_traffic_on_latest_revision: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allTrafficOnLatestRevision') }})
    available_cpu: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableCpu') }})
    available_memory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMemory') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    ingress_settings: Optional[ServiceConfigIngressSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressSettings') }})
    max_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceCount') }})
    max_instance_request_concurrency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceRequestConcurrency') }})
    min_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstanceCount') }})
    secret_environment_variables: Optional[list[shared_secretenvvar.SecretEnvVar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnvironmentVariables') }})
    secret_volumes: Optional[list[shared_secretvolume.SecretVolume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretVolumes') }})
    security_level: Optional[ServiceConfigSecurityLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    service_account_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    vpc_connector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpc_connector_egress_settings: Optional[ServiceConfigVpcConnectorEgressSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnectorEgressSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class ServiceConfig:
    r"""ServiceConfig
    Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
    """
    
    all_traffic_on_latest_revision: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allTrafficOnLatestRevision') }})
    available_cpu: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableCpu') }})
    available_memory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMemory') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    ingress_settings: Optional[ServiceConfigIngressSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressSettings') }})
    max_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceCount') }})
    max_instance_request_concurrency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceRequestConcurrency') }})
    min_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstanceCount') }})
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    secret_environment_variables: Optional[list[shared_secretenvvar.SecretEnvVar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnvironmentVariables') }})
    secret_volumes: Optional[list[shared_secretvolume.SecretVolume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretVolumes') }})
    security_level: Optional[ServiceConfigSecurityLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    service_account_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    vpc_connector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpc_connector_egress_settings: Optional[ServiceConfigVpcConnectorEgressSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnectorEgressSettings') }})
    
