import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlere2 as shared_googlere2


@dataclass_json
@dataclasses.dataclass
class RegexMatcher:
    r"""RegexMatcher
    A regex matcher designed for safety when used with untrusted input.
    """
    
    google_re2: Optional[shared_googlere2.GoogleRe2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleRe2') }})
    regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
