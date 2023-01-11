import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum(str, Enum):
    RETENTION_DURATION_UNSPECIFIED = "RETENTION_DURATION_UNSPECIFIED"
    TWO_MONTHS = "TWO_MONTHS"
    FOURTEEN_MONTHS = "FOURTEEN_MONTHS"
    TWENTY_SIX_MONTHS = "TWENTY_SIX_MONTHS"
    THIRTY_EIGHT_MONTHS = "THIRTY_EIGHT_MONTHS"
    FIFTY_MONTHS = "FIFTY_MONTHS"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataRetentionSettings:
    r"""GoogleAnalyticsAdminV1betaDataRetentionSettings
    Settings values for data retention. This is a singleton resource.
    """
    
    event_data_retention: Optional[GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDataRetention') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reset_user_data_on_new_activity: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetUserDataOnNewActivity') }})
    
