import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceManagementInterfacePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceManagementInterfaceRequest:
    path_params: GetDeviceManagementInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceManagementInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_management_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
