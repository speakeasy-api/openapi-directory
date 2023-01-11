import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSmDevicesFieldsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields:
    r"""UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
    The new fields of the device. Each field of this object is optional.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSmDevicesFieldsRequestBody:
    device_fields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceFields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    wifi_mac: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMac') }})
    

@dataclasses.dataclass
class UpdateNetworkSmDevicesFieldsRequest:
    path_params: UpdateNetworkSmDevicesFieldsPathParams = dataclasses.field()
    request: UpdateNetworkSmDevicesFieldsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSmDevicesFieldsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_sm_devices_fields_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
