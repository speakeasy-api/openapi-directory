import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportaldeviceairinterface as shared_sasportaldeviceairinterface
from ..shared import sasportalinstallationparams as shared_sasportalinstallationparams
from ..shared import sasportaldevicemodel as shared_sasportaldevicemodel

class SasPortalDeviceConfigCategoryEnum(str, Enum):
    DEVICE_CATEGORY_UNSPECIFIED = "DEVICE_CATEGORY_UNSPECIFIED"
    DEVICE_CATEGORY_A = "DEVICE_CATEGORY_A"
    DEVICE_CATEGORY_B = "DEVICE_CATEGORY_B"

class SasPortalDeviceConfigMeasurementCapabilitiesEnum(str, Enum):
    MEASUREMENT_CAPABILITY_UNSPECIFIED = "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT"
    MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"

class SasPortalDeviceConfigStateEnum(str, Enum):
    DEVICE_CONFIG_STATE_UNSPECIFIED = "DEVICE_CONFIG_STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    FINAL = "FINAL"


@dataclass_json
@dataclasses.dataclass
class SasPortalDeviceConfig:
    r"""SasPortalDeviceConfig
    Information about the device configuration.
    """
    
    air_interface: Optional[shared_sasportaldeviceairinterface.SasPortalDeviceAirInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airInterface') }})
    call_sign: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callSign') }})
    category: Optional[SasPortalDeviceConfigCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    installation_params: Optional[shared_sasportalinstallationparams.SasPortalInstallationParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installationParams') }})
    is_signed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSigned') }})
    measurement_capabilities: Optional[list[SasPortalDeviceConfigMeasurementCapabilitiesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementCapabilities') }})
    model: Optional[shared_sasportaldevicemodel.SasPortalDeviceModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    state: Optional[SasPortalDeviceConfigStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
