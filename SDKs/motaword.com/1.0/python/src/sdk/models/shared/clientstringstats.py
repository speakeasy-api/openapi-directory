import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagestringstat as shared_languagestringstat


@dataclass_json
@dataclasses.dataclass
class ClientStringStats:
    language_counts: Optional[list[shared_languagestringstat.LanguageStringStat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_counts') }})
    total_project_strings_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_project_strings_count') }})
    total_tm_strings_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tm_strings_count') }})
    
