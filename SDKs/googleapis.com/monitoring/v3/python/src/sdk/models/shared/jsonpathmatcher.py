import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class JSONPathMatcherJSONMatcherEnum(str, Enum):
    JSON_PATH_MATCHER_OPTION_UNSPECIFIED = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED"
    EXACT_MATCH = "EXACT_MATCH"
    REGEX_MATCH = "REGEX_MATCH"


@dataclass_json
@dataclasses.dataclass
class JSONPathMatcher:
    r"""JSONPathMatcher
    Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
    """
    
    json_matcher: Optional[JSONPathMatcherJSONMatcherEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonMatcher') }})
    json_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonPath') }})
    
