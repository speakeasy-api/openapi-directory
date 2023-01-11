import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpbody as shared_httpbody
from ..shared import notice as shared_notice


@dataclass_json
@dataclasses.dataclass
class RdapResponse:
    r"""RdapResponse
    Response to a general RDAP query.
    """
    
    description: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    json_response: Optional[shared_httpbody.HTTPBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonResponse') }})
    lang: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lang') }})
    notices: Optional[list[shared_notice.Notice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notices') }})
    rdap_conformance: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdapConformance') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
