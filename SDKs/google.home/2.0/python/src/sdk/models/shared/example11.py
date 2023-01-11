import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Example11:
    app_device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_device_id') }})
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    signed_data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed_data') }})
    
