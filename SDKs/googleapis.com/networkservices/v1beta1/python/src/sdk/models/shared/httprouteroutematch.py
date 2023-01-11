import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httprouteheadermatch as shared_httprouteheadermatch
from ..shared import httproutequeryparametermatch as shared_httproutequeryparametermatch


@dataclass_json
@dataclasses.dataclass
class HTTPRouteRouteMatch:
    r"""HTTPRouteRouteMatch
    RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
    """
    
    full_path_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullPathMatch') }})
    headers: Optional[list[shared_httprouteheadermatch.HTTPRouteHeaderMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    ignore_case: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreCase') }})
    prefix_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixMatch') }})
    query_parameters: Optional[list[shared_httproutequeryparametermatch.HTTPRouteQueryParameterMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    regex_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexMatch') }})
    
