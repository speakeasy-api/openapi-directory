import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import coursealias as shared_coursealias


@dataclass_json
@dataclasses.dataclass
class ListCourseAliasesResponse:
    r"""ListCourseAliasesResponse
    Response when listing course aliases.
    """
    
    aliases: Optional[list[shared_coursealias.CourseAlias]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
