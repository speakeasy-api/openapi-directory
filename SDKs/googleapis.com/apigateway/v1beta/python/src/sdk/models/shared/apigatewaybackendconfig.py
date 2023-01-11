import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApigatewayBackendConfig:
    r"""ApigatewayBackendConfig
    Configuration for all backends.
    """
    
    google_service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleServiceAccount') }})
    
