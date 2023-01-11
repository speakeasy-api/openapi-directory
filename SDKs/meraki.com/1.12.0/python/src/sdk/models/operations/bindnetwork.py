import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class BindNetworkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BindNetworkRequestBody:
    config_template_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configTemplateId') }})
    auto_bind: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBind') }})
    

@dataclasses.dataclass
class BindNetworkRequest:
    path_params: BindNetworkPathParams = dataclasses.field()
    request: BindNetworkRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BindNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bind_network_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
