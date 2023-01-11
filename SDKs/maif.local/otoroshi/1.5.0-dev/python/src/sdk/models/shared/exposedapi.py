import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExposedAPI:
    r"""ExposedAPI
    The Open API configuration for your service (if one)
    """
    
    expose_api: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposeApi') }})
    open_api_descriptor_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openApiDescriptorUrl') }})
    
