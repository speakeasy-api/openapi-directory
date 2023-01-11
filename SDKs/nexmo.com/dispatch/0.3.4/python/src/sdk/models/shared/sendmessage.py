import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fromproperty as shared_fromproperty
from ..shared import messageproperty as shared_messageproperty
from ..shared import toproperty as shared_toproperty


@dataclass_json
@dataclasses.dataclass
class SendMessage:
    r"""SendMessage
    Send Message
    """
    
    from_: shared_fromproperty.FromProperty = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message: shared_messageproperty.MessageProperty = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    to: shared_toproperty.ToProperty = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
