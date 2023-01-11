import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaMeasurementProtocolSecret:
    r"""GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
    A secret value used for sending hits to Measurement Protocol.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretValue') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput:
    r"""GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput
    A secret value used for sending hits to Measurement Protocol.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
