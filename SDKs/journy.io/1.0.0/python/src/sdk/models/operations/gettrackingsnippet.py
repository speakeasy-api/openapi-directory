import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTrackingSnippetQueryParams:
    domain: str = dataclasses.field(metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet200ApplicationJSONData:
    r"""GetTrackingSnippet200ApplicationJSONData
    A snippet
    """
    
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    snippet: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet200ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet200ApplicationJSON:
    r"""GetTrackingSnippet200ApplicationJSON
    The basic response containing the unique ID of the request and the response status
    """
    
    data: GetTrackingSnippet200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: GetTrackingSnippet200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet400ApplicationJSONErrorsParameters:
    r"""GetTrackingSnippet400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet400ApplicationJSONErrors:
    r"""GetTrackingSnippet400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[GetTrackingSnippet400ApplicationJSONErrorsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet400ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet400ApplicationJSON:
    r"""GetTrackingSnippet400ApplicationJSON
    Specify the fields and/ or parameters that had errors
    """
    
    errors: GetTrackingSnippet400ApplicationJSONErrors = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet400ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet401ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet401ApplicationJSON:
    r"""GetTrackingSnippet401ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet401ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet403ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet403ApplicationJSON:
    r"""GetTrackingSnippet403ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet403ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet404ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet404ApplicationJSON:
    r"""GetTrackingSnippet404ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet404ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet429ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet429ApplicationJSON:
    r"""GetTrackingSnippet429ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet429ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet500ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSnippet500ApplicationJSON:
    r"""GetTrackingSnippet500ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet500ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetTrackingSnippetRequest:
    query_params: GetTrackingSnippetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackingSnippetResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tracking_snippet_200_application_json_object: Optional[GetTrackingSnippet200ApplicationJSON] = dataclasses.field(default=None)
    get_tracking_snippet_400_application_json_object: Optional[GetTrackingSnippet400ApplicationJSON] = dataclasses.field(default=None)
    get_tracking_snippet_401_application_json_object: Optional[GetTrackingSnippet401ApplicationJSON] = dataclasses.field(default=None)
    get_tracking_snippet_403_application_json_object: Optional[GetTrackingSnippet403ApplicationJSON] = dataclasses.field(default=None)
    get_tracking_snippet_404_application_json_object: Optional[GetTrackingSnippet404ApplicationJSON] = dataclasses.field(default=None)
    get_tracking_snippet_429_application_json_object: Optional[GetTrackingSnippet429ApplicationJSON] = dataclasses.field(default=None)
    get_tracking_snippet_500_application_json_object: Optional[GetTrackingSnippet500ApplicationJSON] = dataclasses.field(default=None)
    
