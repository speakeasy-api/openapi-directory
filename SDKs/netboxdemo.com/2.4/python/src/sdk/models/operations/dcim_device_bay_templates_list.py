import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicebaytemplate as shared_devicebaytemplate


@dataclasses.dataclass
class DcimDeviceBayTemplatesListQueryParams:
    devicetype_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devicetype_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimDeviceBayTemplatesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_devicebaytemplate.DeviceBayTemplate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesListRequest:
    query_params: DcimDeviceBayTemplatesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_device_bay_templates_list_200_application_json_object: Optional[DcimDeviceBayTemplatesList200ApplicationJSON] = dataclasses.field(default=None)
    
