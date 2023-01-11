import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firebaseproject as shared_firebaseproject


@dataclass_json
@dataclasses.dataclass
class ListFirebaseProjectsResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    results: Optional[list[shared_firebaseproject.FirebaseProject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
