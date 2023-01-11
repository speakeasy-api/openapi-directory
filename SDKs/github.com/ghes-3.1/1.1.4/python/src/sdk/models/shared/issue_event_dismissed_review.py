import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IssueEventDismissedReview:
    dismissal_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_message') }})
    review_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_id') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    dismissal_commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_commit_id') }})
    
