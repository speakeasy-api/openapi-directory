import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consoleserverport as shared_consoleserverport


@dataclasses.dataclass
class DcimConsoleServerPortsListQueryParams:
    device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimConsoleServerPortsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_consoleserverport.ConsoleServerPort] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimConsoleServerPortsListRequest:
    query_params: DcimConsoleServerPortsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsoleServerPortsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_console_server_ports_list_200_application_json_object: Optional[DcimConsoleServerPortsList200ApplicationJSON] = dataclasses.field(default=None)
    
