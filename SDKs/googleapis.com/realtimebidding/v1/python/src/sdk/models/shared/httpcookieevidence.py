import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPCookieEvidence:
    r"""HTTPCookieEvidence
    Evidence for HTTP cookie-related policy violations.
    """
    
    cookie_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieNames') }})
    max_cookie_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCookieCount') }})
    
