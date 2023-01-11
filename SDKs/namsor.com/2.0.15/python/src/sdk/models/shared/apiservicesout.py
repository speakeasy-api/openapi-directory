import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apiserviceout as shared_apiserviceout


@dataclass_json
@dataclasses.dataclass
class APIServicesOut:
    api_services: Optional[list[shared_apiserviceout.APIServiceOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiServices') }})
    
