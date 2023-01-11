import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesearchideahubv1betatopic as shared_googlesearchideahubv1betatopic


@dataclass_json
@dataclasses.dataclass
class GoogleSearchIdeahubV1betaIdea:
    r"""GoogleSearchIdeahubV1betaIdea
    A single Idea that we want to show the end user.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    topics: Optional[list[shared_googlesearchideahubv1betatopic.GoogleSearchIdeahubV1betaTopic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
