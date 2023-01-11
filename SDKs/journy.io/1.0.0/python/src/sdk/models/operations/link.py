import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinkRequestBodyIdentification:
    r"""LinkRequestBodyIdentification
    User identification requires a userId, email or both
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclasses.dataclass
class LinkRequestBody:
    r"""LinkRequestBody
    Link web activity to user
    """
    
    device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    identification: LinkRequestBodyIdentification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identification') }})
    

@dataclass_json
@dataclasses.dataclass
class Link201ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Link201ApplicationJSON:
    r"""Link201ApplicationJSON
    The object was created
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: Link201ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class Link400ApplicationJSONErrorsParameters:
    r"""Link400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclasses.dataclass
class Link400ApplicationJSONErrors:
    r"""Link400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[Link400ApplicationJSONErrorsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class Link400ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Link400ApplicationJSON:
    r"""Link400ApplicationJSON
    Specify the fields and/ or parameters that had errors
    """
    
    errors: Link400ApplicationJSONErrors = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: Link400ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class Link401ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Link401ApplicationJSON:
    r"""Link401ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: Link401ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class Link403ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Link403ApplicationJSON:
    r"""Link403ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: Link403ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class Link429ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Link429ApplicationJSON:
    r"""Link429ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: Link429ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class Link500ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Link500ApplicationJSON:
    r"""Link500ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: Link500ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class LinkRequest:
    request: LinkRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LinkResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    link_201_application_json_object: Optional[Link201ApplicationJSON] = dataclasses.field(default=None)
    link_400_application_json_object: Optional[Link400ApplicationJSON] = dataclasses.field(default=None)
    link_401_application_json_object: Optional[Link401ApplicationJSON] = dataclasses.field(default=None)
    link_403_application_json_object: Optional[Link403ApplicationJSON] = dataclasses.field(default=None)
    link_429_application_json_object: Optional[Link429ApplicationJSON] = dataclasses.field(default=None)
    link_500_application_json_object: Optional[Link500ApplicationJSON] = dataclasses.field(default=None)
    
