import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceManagementInterfacePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    NOT_CONFIGURED = "not configured"


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceManagementInterfaceRequestBodyWan1:
    r"""UpdateDeviceManagementInterfaceRequestBodyWan1
    WAN 1 settings
    """
    
    static_dns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticDns') }})
    static_gateway_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticGatewayIp') }})
    static_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIp') }})
    static_subnet_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticSubnetMask') }})
    using_static_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usingStaticIp') }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    wan_enabled: Optional[UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wanEnabled') }})
    
class UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    NOT_CONFIGURED = "not configured"


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceManagementInterfaceRequestBodyWan2:
    r"""UpdateDeviceManagementInterfaceRequestBodyWan2
    WAN 2 settings (only for MX devices)
    """
    
    static_dns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticDns') }})
    static_gateway_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticGatewayIp') }})
    static_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIp') }})
    static_subnet_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticSubnetMask') }})
    using_static_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usingStaticIp') }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    wan_enabled: Optional[UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wanEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceManagementInterfaceRequestBody:
    wan1: Optional[UpdateDeviceManagementInterfaceRequestBodyWan1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wan1') }})
    wan2: Optional[UpdateDeviceManagementInterfaceRequestBodyWan2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wan2') }})
    

@dataclasses.dataclass
class UpdateDeviceManagementInterfaceRequest:
    path_params: UpdateDeviceManagementInterfacePathParams = dataclasses.field()
    request: Optional[UpdateDeviceManagementInterfaceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceManagementInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_management_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
