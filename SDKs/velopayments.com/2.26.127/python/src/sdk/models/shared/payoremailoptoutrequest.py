import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PayorEmailOptOutRequest:
    reminder_emails_opt_out: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminderEmailsOptOut') }})
    
