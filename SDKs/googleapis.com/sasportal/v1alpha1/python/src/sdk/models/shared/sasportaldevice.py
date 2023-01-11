import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportaldeviceconfig as shared_sasportaldeviceconfig
from ..shared import sasportaldevicemetadata as shared_sasportaldevicemetadata
from ..shared import sasportalfrequencyrange as shared_sasportalfrequencyrange
from ..shared import sasportaldevicegrant as shared_sasportaldevicegrant
from ..shared import sasportalchannelwithscore as shared_sasportalchannelwithscore
from ..shared import sasportaldevicemetadata as shared_sasportaldevicemetadata

class SasPortalDeviceStateEnum(str, Enum):
    DEVICE_STATE_UNSPECIFIED = "DEVICE_STATE_UNSPECIFIED"
    RESERVED = "RESERVED"
    REGISTERED = "REGISTERED"
    DEREGISTERED = "DEREGISTERED"


@dataclass_json
@dataclasses.dataclass
class SasPortalDeviceInput:
    active_config: Optional[shared_sasportaldeviceconfig.SasPortalDeviceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeConfig') }})
    device_metadata: Optional[shared_sasportaldevicemetadata.SasPortalDeviceMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fcc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fccId') }})
    grant_range_allowlists: Optional[list[shared_sasportalfrequencyrange.SasPortalFrequencyRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantRangeAllowlists') }})
    grants: Optional[list[shared_sasportaldevicegrant.SasPortalDeviceGrant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grants') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preloaded_config: Optional[shared_sasportaldeviceconfig.SasPortalDeviceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preloadedConfig') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    state: Optional[SasPortalDeviceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class SasPortalDevice:
    active_config: Optional[shared_sasportaldeviceconfig.SasPortalDeviceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeConfig') }})
    current_channels: Optional[list[shared_sasportalchannelwithscore.SasPortalChannelWithScore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentChannels') }})
    device_metadata: Optional[shared_sasportaldevicemetadata.SasPortalDeviceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fcc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fccId') }})
    grant_range_allowlists: Optional[list[shared_sasportalfrequencyrange.SasPortalFrequencyRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantRangeAllowlists') }})
    grants: Optional[list[shared_sasportaldevicegrant.SasPortalDeviceGrant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grants') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preloaded_config: Optional[shared_sasportaldeviceconfig.SasPortalDeviceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preloadedConfig') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    state: Optional[SasPortalDeviceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
