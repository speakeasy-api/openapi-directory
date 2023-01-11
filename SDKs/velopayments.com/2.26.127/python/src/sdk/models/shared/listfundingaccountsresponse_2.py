import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fundingaccountresponse_2 as shared_fundingaccountresponse_2


@dataclass_json
@dataclasses.dataclass
class ListFundingAccountsResponse2:
    r"""ListFundingAccountsResponse2
    List Funding Accounts Response Object
    """
    
    content: Optional[list[shared_fundingaccountresponse_2.FundingAccountResponse2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
