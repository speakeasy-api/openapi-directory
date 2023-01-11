import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData:
    r"""GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData
    Data specific to iOS app streams.
    """
    
    bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    firebase_app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseAppId') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput:
    r"""GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput
    Data specific to iOS app streams.
    """
    
    bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    
