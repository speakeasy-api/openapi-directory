import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interaction_channel_participant_enum_type_enum as shared_interaction_channel_participant_enum_type_enum


@dataclass_json
@dataclasses.dataclass
class FlexV1InteractionInteractionChannelInteractionChannelParticipant:
    channel_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel_sid') }})
    interaction_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interaction_sid') }})
    sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    type: Optional[shared_interaction_channel_participant_enum_type_enum.InteractionChannelParticipantEnumTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
