import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountresource as shared_accountresource


@dataclass_json
@dataclasses.dataclass
class ListAccountsResponseLinks:
    next: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountsResponse:
    r"""ListAccountsResponse
    Successful response to get all accounts. This returns a paginated list of
    accounts, which can be scrolled by following the `prev` and `next` links
    if present.
    
    """
    
    data: list[shared_accountresource.AccountResource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListAccountsResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
