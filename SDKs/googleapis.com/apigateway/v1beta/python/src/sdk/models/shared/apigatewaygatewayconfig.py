import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewaybackendconfig as shared_apigatewaybackendconfig


@dataclass_json
@dataclasses.dataclass
class ApigatewayGatewayConfig:
    r"""ApigatewayGatewayConfig
    Configuration settings for Gateways.
    """
    
    backend_config: Optional[shared_apigatewaybackendconfig.ApigatewayBackendConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendConfig') }})
    
