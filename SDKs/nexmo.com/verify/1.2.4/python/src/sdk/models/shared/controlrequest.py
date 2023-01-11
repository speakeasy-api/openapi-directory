import dataclasses
from enum import Enum

class ControlRequestCmdEnum(str, Enum):
    CANCEL = "cancel"
    TRIGGER_NEXT_EVENT = "trigger_next_event"


@dataclasses.dataclass
class ControlRequest:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    api_secret: str = dataclasses.field(metadata={'form': { 'field_name': 'api_secret' }})
    cmd: ControlRequestCmdEnum = dataclasses.field(metadata={'form': { 'field_name': 'cmd' }})
    request_id: str = dataclasses.field(metadata={'form': { 'field_name': 'request_id' }})
    
