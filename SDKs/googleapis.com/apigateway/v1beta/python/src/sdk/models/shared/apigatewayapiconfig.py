import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewaygatewayconfig as shared_apigatewaygatewayconfig
from ..shared import apigatewayapiconfiggrpcservicedefinition as shared_apigatewayapiconfiggrpcservicedefinition
from ..shared import apigatewayapiconfigfile as shared_apigatewayapiconfigfile
from ..shared import apigatewayapiconfigopenapidocument as shared_apigatewayapiconfigopenapidocument

class ApigatewayAPIConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    ACTIVATING = "ACTIVATING"


@dataclass_json
@dataclasses.dataclass
class ApigatewayAPIConfig:
    r"""ApigatewayAPIConfig
    An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway_config: Optional[shared_apigatewaygatewayconfig.ApigatewayGatewayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayConfig') }})
    gateway_service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayServiceAccount') }})
    grpc_services: Optional[list[shared_apigatewayapiconfiggrpcservicedefinition.ApigatewayAPIConfigGrpcServiceDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcServices') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed_service_configs: Optional[list[shared_apigatewayapiconfigfile.ApigatewayAPIConfigFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedServiceConfigs') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    openapi_documents: Optional[list[shared_apigatewayapiconfigopenapidocument.ApigatewayAPIConfigOpenAPIDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openapiDocuments') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    state: Optional[ApigatewayAPIConfigStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ApigatewayAPIConfigInput:
    r"""ApigatewayAPIConfigInput
    An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway_config: Optional[shared_apigatewaygatewayconfig.ApigatewayGatewayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayConfig') }})
    gateway_service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayServiceAccount') }})
    grpc_services: Optional[list[shared_apigatewayapiconfiggrpcservicedefinition.ApigatewayAPIConfigGrpcServiceDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcServices') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed_service_configs: Optional[list[shared_apigatewayapiconfigfile.ApigatewayAPIConfigFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedServiceConfigs') }})
    openapi_documents: Optional[list[shared_apigatewayapiconfigopenapidocument.ApigatewayAPIConfigOpenAPIDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openapiDocuments') }})
    
