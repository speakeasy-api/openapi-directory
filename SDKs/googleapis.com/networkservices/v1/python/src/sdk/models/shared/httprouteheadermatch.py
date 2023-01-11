import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httprouteheadermatchintegerrange as shared_httprouteheadermatchintegerrange


@dataclass_json
@dataclasses.dataclass
class HTTPRouteHeaderMatch:
    r"""HTTPRouteHeaderMatch
    Specifies how to select a route rule based on HTTP request headers.
    """
    
    exact_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactMatch') }})
    header: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    invert_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertMatch') }})
    prefix_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixMatch') }})
    present_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentMatch') }})
    range_match: Optional[shared_httprouteheadermatchintegerrange.HTTPRouteHeaderMatchIntegerRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeMatch') }})
    regex_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexMatch') }})
    suffix_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffixMatch') }})
    
