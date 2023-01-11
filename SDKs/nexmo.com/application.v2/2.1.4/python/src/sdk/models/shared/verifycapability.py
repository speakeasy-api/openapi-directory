import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VerifyCapabilityVersionEnum(str, Enum):
    V2 = "v2"

class VerifyCapabilityWebhooksStatusURLHTTPMethodEnum(str, Enum):
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class VerifyCapabilityWebhooksStatusURL:
    r"""VerifyCapabilityWebhooksStatusURL
    Vonage will send request status events (e.g. `progress`, `complete`) to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[VerifyCapabilityWebhooksStatusURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyCapabilityWebhooks:
    status_url: Optional[VerifyCapabilityWebhooksStatusURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_url') }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyCapability:
    r"""VerifyCapability
    Two factor authentication related configuration
    """
    
    version: Optional[VerifyCapabilityVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    webhooks: Optional[VerifyCapabilityWebhooks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
