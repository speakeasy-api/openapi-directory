import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consoleport as shared_consoleport


@dataclasses.dataclass
class DcimConsoleConnectionsListQueryParams:
    connection_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'connection_status', 'style': 'form', 'explode': True }})
    device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimConsoleConnectionsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_consoleport.ConsolePort] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimConsoleConnectionsListRequest:
    query_params: DcimConsoleConnectionsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsoleConnectionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_console_connections_list_200_application_json_object: Optional[DcimConsoleConnectionsList200ApplicationJSON] = dataclasses.field(default=None)
    
