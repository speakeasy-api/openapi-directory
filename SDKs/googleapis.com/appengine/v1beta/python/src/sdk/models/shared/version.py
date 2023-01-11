import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apiconfighandler as shared_apiconfighandler
from ..shared import automaticscaling as shared_automaticscaling
from ..shared import basicscaling as shared_basicscaling
from ..shared import deployment as shared_deployment
from ..shared import endpointsapiservice as shared_endpointsapiservice
from ..shared import entrypoint as shared_entrypoint
from ..shared import errorhandler as shared_errorhandler
from ..shared import urlmap as shared_urlmap
from ..shared import healthcheck as shared_healthcheck
from ..shared import library as shared_library
from ..shared import livenesscheck as shared_livenesscheck
from ..shared import manualscaling as shared_manualscaling
from ..shared import network as shared_network
from ..shared import readinesscheck as shared_readinesscheck
from ..shared import resources as shared_resources
from ..shared import vpcaccessconnector as shared_vpcaccessconnector

class VersionInboundServicesEnum(str, Enum):
    INBOUND_SERVICE_UNSPECIFIED = "INBOUND_SERVICE_UNSPECIFIED"
    INBOUND_SERVICE_MAIL = "INBOUND_SERVICE_MAIL"
    INBOUND_SERVICE_MAIL_BOUNCE = "INBOUND_SERVICE_MAIL_BOUNCE"
    INBOUND_SERVICE_XMPP_ERROR = "INBOUND_SERVICE_XMPP_ERROR"
    INBOUND_SERVICE_XMPP_MESSAGE = "INBOUND_SERVICE_XMPP_MESSAGE"
    INBOUND_SERVICE_XMPP_SUBSCRIBE = "INBOUND_SERVICE_XMPP_SUBSCRIBE"
    INBOUND_SERVICE_XMPP_PRESENCE = "INBOUND_SERVICE_XMPP_PRESENCE"
    INBOUND_SERVICE_CHANNEL_PRESENCE = "INBOUND_SERVICE_CHANNEL_PRESENCE"
    INBOUND_SERVICE_WARMUP = "INBOUND_SERVICE_WARMUP"

class VersionServingStatusEnum(str, Enum):
    SERVING_STATUS_UNSPECIFIED = "SERVING_STATUS_UNSPECIFIED"
    SERVING = "SERVING"
    STOPPED = "STOPPED"


@dataclass_json
@dataclasses.dataclass
class Version:
    r"""Version
    A Version resource is a specific set of source code and configuration files that are deployed into a service.
    """
    
    api_config: Optional[shared_apiconfighandler.APIConfigHandler] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiConfig') }})
    app_engine_apis: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineApis') }})
    automatic_scaling: Optional[shared_automaticscaling.AutomaticScaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticScaling') }})
    basic_scaling: Optional[shared_basicscaling.BasicScaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicScaling') }})
    beta_settings: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betaSettings') }})
    build_env_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildEnvVariables') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    default_expiration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultExpiration') }})
    deployment: Optional[shared_deployment.Deployment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    disk_usage_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskUsageBytes') }})
    endpoints_api_service: Optional[shared_endpointsapiservice.EndpointsAPIService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointsApiService') }})
    entrypoint: Optional[shared_entrypoint.Entrypoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    env: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    env_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    error_handlers: Optional[list[shared_errorhandler.ErrorHandler]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlers') }})
    handlers: Optional[list[shared_urlmap.URLMap]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlers') }})
    health_check: Optional[shared_healthcheck.HealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbound_services: Optional[list[VersionInboundServicesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundServices') }})
    instance_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceClass') }})
    libraries: Optional[list[shared_library.Library]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraries') }})
    liveness_check: Optional[shared_livenesscheck.LivenessCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livenessCheck') }})
    manual_scaling: Optional[shared_manualscaling.ManualScaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualScaling') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[shared_network.Network] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nobuild_files_regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nobuildFilesRegex') }})
    readiness_check: Optional[shared_readinesscheck.ReadinessCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readinessCheck') }})
    resources: Optional[shared_resources.Resources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    runtime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    runtime_api_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeApiVersion') }})
    runtime_channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeChannel') }})
    runtime_main_executable_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeMainExecutablePath') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    serving_status: Optional[VersionServingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingStatus') }})
    threadsafe: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadsafe') }})
    version_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionUrl') }})
    vm: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    vpc_access_connector: Optional[shared_vpcaccessconnector.VpcAccessConnector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccessConnector') }})
    zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
