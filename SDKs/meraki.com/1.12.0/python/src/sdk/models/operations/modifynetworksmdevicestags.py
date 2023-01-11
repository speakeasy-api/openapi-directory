import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ModifyNetworkSmDevicesTagsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ModifyNetworkSmDevicesTagsRequestBody:
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    update_action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateAction') }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    wifi_macs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacs') }})
    

@dataclasses.dataclass
class ModifyNetworkSmDevicesTagsRequest:
    path_params: ModifyNetworkSmDevicesTagsPathParams = dataclasses.field()
    request: ModifyNetworkSmDevicesTagsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyNetworkSmDevicesTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    modify_network_sm_devices_tags_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
