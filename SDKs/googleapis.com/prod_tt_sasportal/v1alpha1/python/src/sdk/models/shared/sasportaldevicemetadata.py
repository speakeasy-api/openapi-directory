import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalnrqzvalidation as shared_sasportalnrqzvalidation


@dataclass_json
@dataclasses.dataclass
class SasPortalDeviceMetadataInput:
    r"""SasPortalDeviceMetadataInput
    Device data overridable by both SAS Portal and registration requests.
    """
    
    antenna_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaModel') }})
    common_channel_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonChannelGroup') }})
    interference_coordination_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interferenceCoordinationGroup') }})
    nrqz_validation: Optional[shared_sasportalnrqzvalidation.SasPortalNrqzValidation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nrqzValidation') }})
    

@dataclass_json
@dataclasses.dataclass
class SasPortalDeviceMetadata:
    r"""SasPortalDeviceMetadata
    Device data overridable by both SAS Portal and registration requests.
    """
    
    antenna_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaModel') }})
    common_channel_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonChannelGroup') }})
    interference_coordination_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interferenceCoordinationGroup') }})
    nrqz_validated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nrqzValidated') }})
    nrqz_validation: Optional[shared_sasportalnrqzvalidation.SasPortalNrqzValidation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nrqzValidation') }})
    
