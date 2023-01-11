import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fundingaccountresponse as shared_fundingaccountresponse


@dataclass_json
@dataclasses.dataclass
class ListFundingAccountsResponse:
    r"""ListFundingAccountsResponse
    List Source Accounts Response Object
    """
    
    content: Optional[list[shared_fundingaccountresponse.FundingAccountResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
