import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendCommandToDeviceRequest:
    r"""SendCommandToDeviceRequest
    Request for `SendCommandToDevice`.
    """
    
    binary_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryData') }})
    subfolder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subfolder') }})
    
