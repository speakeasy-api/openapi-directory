import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumerinfo as shared_consumerinfo


@dataclass_json
@dataclasses.dataclass
class CheckInfo:
    r"""CheckInfo
    Contains additional information about the check operation.
    """
    
    consumer_info: Optional[shared_consumerinfo.ConsumerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerInfo') }})
    unused_arguments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unusedArguments') }})
    
