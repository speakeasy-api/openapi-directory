import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizeddomain as shared_authorizeddomain


@dataclass_json
@dataclasses.dataclass
class ListAuthorizedDomainsResponse:
    r"""ListAuthorizedDomainsResponse
    A list of Authorized Domains.
    """
    
    domains: Optional[list[shared_authorizeddomain.AuthorizedDomain]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
