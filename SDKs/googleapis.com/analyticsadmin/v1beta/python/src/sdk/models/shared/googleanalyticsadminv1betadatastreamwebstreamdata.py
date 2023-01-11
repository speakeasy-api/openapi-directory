import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamWebStreamData:
    r"""GoogleAnalyticsAdminV1betaDataStreamWebStreamData
    Data specific to web streams.
    """
    
    default_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultUri') }})
    firebase_app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseAppId') }})
    measurement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementId') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput:
    r"""GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput
    Data specific to web streams.
    """
    
    default_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultUri') }})
    
