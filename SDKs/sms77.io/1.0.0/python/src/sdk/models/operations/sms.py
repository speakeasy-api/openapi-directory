import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SmsQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    to: str = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    debug: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    delay: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'delay', 'style': 'form', 'explode': True }})
    details: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'details', 'style': 'form', 'explode': True }})
    flash: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'flash', 'style': 'form', 'explode': True }})
    foreign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'foreign_id', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    json: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    no_reload: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'no_reload', 'style': 'form', 'explode': True }})
    performance_tracking: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'performance_tracking', 'style': 'form', 'explode': True }})
    return_msg_id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return_msg_id', 'style': 'form', 'explode': True }})
    udh: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'udh', 'style': 'form', 'explode': True }})
    unicode: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unicode', 'style': 'form', 'explode': True }})
    utf8: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'utf8', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Sms200ApplicationJSONMessages:
    encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_text') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    messages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    parts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    recipient: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    sender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sender') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
class Sms200ApplicationJSONSmsTypeEnum(str, Enum):
    ECONOMY = "economy"
    DIRECT = "direct"


@dataclass_json
@dataclasses.dataclass
class Sms200ApplicationJSON:
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    debug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug') }})
    messages: Optional[list[Sms200ApplicationJSONMessages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    sms_type: Optional[Sms200ApplicationJSONSmsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_type') }})
    success: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    total_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_price') }})
    

@dataclasses.dataclass
class SmsRequest:
    query_params: SmsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sms_200_application_json_object: Optional[Sms200ApplicationJSON] = dataclasses.field(default=None)
    sms_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
