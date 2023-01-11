import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData:
    r"""GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData
    Data specific to Android app streams.
    """
    
    firebase_app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseAppId') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput:
    r"""GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput
    Data specific to Android app streams.
    """
    
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
