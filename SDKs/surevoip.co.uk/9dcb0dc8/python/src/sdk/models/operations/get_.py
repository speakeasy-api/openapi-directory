import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"
    TEXT_HTML = "text/html"
    TEXT_XML = "text/xml"
    APPLICATION_XML = "application/xml"

class GetHypermediaEnum(str, Enum):
    YES = "yes"
    NO = "no"


@dataclasses.dataclass
class GetQueryParams:
    content_type: Optional[GetContentTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content-type', 'style': 'form', 'explode': True }})
    hypermedia: Optional[GetHypermediaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hypermedia', 'style': 'form', 'explode': True }})
    
class Get200ApplicationJSONStatusEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclasses.dataclass
class Get200ApplicationJSON:
    status: Optional[Get200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetRequest:
    query_params: GetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_200_application_json_object: Optional[Get200ApplicationJSON] = dataclasses.field(default=None)
    
