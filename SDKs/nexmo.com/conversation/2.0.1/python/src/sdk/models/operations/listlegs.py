import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leg_state_enum as shared_leg_state_enum
from ..shared import channel_type_enum as shared_channel_type_enum


@dataclass_json
@dataclasses.dataclass
class ListLegs200ApplicationJSONEmbeddedLegs:
    uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    embedded: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    conversation_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversation_uuid') }})
    from_: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    start_end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_end') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    state: Optional[shared_leg_state_enum.LegStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    to: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[shared_channel_type_enum.ChannelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListLegs200ApplicationJSONEmbedded:
    r"""ListLegs200ApplicationJSONEmbedded
    A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
    """
    
    legs: list[ListLegs200ApplicationJSONEmbeddedLegs] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    

@dataclass_json
@dataclasses.dataclass
class ListLegs200ApplicationJSONLinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class ListLegs200ApplicationJSONLinks:
    self: ListLegs200ApplicationJSONLinksSelf = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ListLegs200ApplicationJSON:
    r"""ListLegs200ApplicationJSON
    List Legs Response Payload Object
    """
    
    embedded: ListLegs200ApplicationJSONEmbedded = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: ListLegs200ApplicationJSONLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    record_index: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_index') }})
    

@dataclasses.dataclass
class ListLegsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_legs_200_application_json_object: Optional[ListLegs200ApplicationJSON] = dataclasses.field(default=None)
    
