import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossary as shared_glossary


@dataclass_json
@dataclasses.dataclass
class ListGlossariesResponse:
    r"""ListGlossariesResponse
    Response message for ListGlossaries.
    """
    
    glossaries: Optional[list[shared_glossary.Glossary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
