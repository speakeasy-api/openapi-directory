import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalfrequencyrange as shared_sasportalfrequencyrange
from ..shared import sasportaldpamovelist as shared_sasportaldpamovelist

class SasPortalDeviceGrantChannelTypeEnum(str, Enum):
    CHANNEL_TYPE_UNSPECIFIED = "CHANNEL_TYPE_UNSPECIFIED"
    CHANNEL_TYPE_GAA = "CHANNEL_TYPE_GAA"
    CHANNEL_TYPE_PAL = "CHANNEL_TYPE_PAL"

class SasPortalDeviceGrantStateEnum(str, Enum):
    GRANT_STATE_UNSPECIFIED = "GRANT_STATE_UNSPECIFIED"
    GRANT_STATE_GRANTED = "GRANT_STATE_GRANTED"
    GRANT_STATE_TERMINATED = "GRANT_STATE_TERMINATED"
    GRANT_STATE_SUSPENDED = "GRANT_STATE_SUSPENDED"
    GRANT_STATE_AUTHORIZED = "GRANT_STATE_AUTHORIZED"
    GRANT_STATE_EXPIRED = "GRANT_STATE_EXPIRED"


@dataclass_json
@dataclasses.dataclass
class SasPortalDeviceGrant:
    r"""SasPortalDeviceGrant
    Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
    """
    
    channel_type: Optional[SasPortalDeviceGrantChannelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    frequency_range: Optional[shared_sasportalfrequencyrange.SasPortalFrequencyRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyRange') }})
    grant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantId') }})
    last_heartbeat_transmit_expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastHeartbeatTransmitExpireTime') }})
    max_eirp: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEirp') }})
    move_list: Optional[list[shared_sasportaldpamovelist.SasPortalDpaMoveList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveList') }})
    state: Optional[SasPortalDeviceGrantStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    suspension_reason: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReason') }})
    
