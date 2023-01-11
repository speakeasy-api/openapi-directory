import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrackJourneyEventRequestBodyIdentificationAccount:
    r"""TrackJourneyEventRequestBodyIdentificationAccount
    Account identification requires an accountId, domain or both
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEventRequestBodyIdentificationUser:
    r"""TrackJourneyEventRequestBodyIdentificationUser
    User identification requires a userId, email or both
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEventRequestBodyIdentification:
    r"""TrackJourneyEventRequestBodyIdentification
    Event identification requires a user, account or both
    """
    
    account: Optional[TrackJourneyEventRequestBodyIdentificationAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    user: Optional[TrackJourneyEventRequestBodyIdentificationUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEventRequestBody:
    r"""TrackJourneyEventRequestBody
    Event for a user or an account
    """
    
    identification: TrackJourneyEventRequestBodyIdentification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    triggered_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggeredAt') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent201ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent201ApplicationJSON:
    r"""TrackJourneyEvent201ApplicationJSON
    The object was created
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent201ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent400ApplicationJSONErrorsParameters:
    r"""TrackJourneyEvent400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent400ApplicationJSONErrors:
    r"""TrackJourneyEvent400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[TrackJourneyEvent400ApplicationJSONErrorsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent400ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent400ApplicationJSON:
    r"""TrackJourneyEvent400ApplicationJSON
    Specify the fields and/ or parameters that had errors
    """
    
    errors: TrackJourneyEvent400ApplicationJSONErrors = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent400ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent401ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent401ApplicationJSON:
    r"""TrackJourneyEvent401ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent401ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent403ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent403ApplicationJSON:
    r"""TrackJourneyEvent403ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent403ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent429ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent429ApplicationJSON:
    r"""TrackJourneyEvent429ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent429ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent500ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackJourneyEvent500ApplicationJSON:
    r"""TrackJourneyEvent500ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent500ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class TrackJourneyEventRequest:
    request: TrackJourneyEventRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TrackJourneyEventResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    track_journey_event_201_application_json_object: Optional[TrackJourneyEvent201ApplicationJSON] = dataclasses.field(default=None)
    track_journey_event_400_application_json_object: Optional[TrackJourneyEvent400ApplicationJSON] = dataclasses.field(default=None)
    track_journey_event_401_application_json_object: Optional[TrackJourneyEvent401ApplicationJSON] = dataclasses.field(default=None)
    track_journey_event_403_application_json_object: Optional[TrackJourneyEvent403ApplicationJSON] = dataclasses.field(default=None)
    track_journey_event_429_application_json_object: Optional[TrackJourneyEvent429ApplicationJSON] = dataclasses.field(default=None)
    track_journey_event_500_application_json_object: Optional[TrackJourneyEvent500ApplicationJSON] = dataclasses.field(default=None)
    
