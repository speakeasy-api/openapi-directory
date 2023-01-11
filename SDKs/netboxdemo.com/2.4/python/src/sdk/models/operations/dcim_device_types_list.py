import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicetype as shared_devicetype


@dataclasses.dataclass
class DcimDeviceTypesListQueryParams:
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_console_server: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_console_server', 'style': 'form', 'explode': True }})
    is_full_depth: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_full_depth', 'style': 'form', 'explode': True }})
    is_network_device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_network_device', 'style': 'form', 'explode': True }})
    is_pdu: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_pdu', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    part_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'part_number', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    subdevice_role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subdevice_role', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    u_height: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'u_height', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimDeviceTypesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_devicetype.DeviceType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimDeviceTypesListRequest:
    query_params: DcimDeviceTypesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceTypesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_device_types_list_200_application_json_object: Optional[DcimDeviceTypesList200ApplicationJSON] = dataclasses.field(default=None)
    
