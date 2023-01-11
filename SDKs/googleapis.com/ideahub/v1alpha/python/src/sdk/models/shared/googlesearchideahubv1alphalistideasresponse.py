import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesearchideahubv1alphaidea as shared_googlesearchideahubv1alphaidea


@dataclass_json
@dataclasses.dataclass
class GoogleSearchIdeahubV1alphaListIdeasResponse:
    ideas: Optional[list[shared_googlesearchideahubv1alphaidea.GoogleSearchIdeahubV1alphaIdea]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ideas') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
