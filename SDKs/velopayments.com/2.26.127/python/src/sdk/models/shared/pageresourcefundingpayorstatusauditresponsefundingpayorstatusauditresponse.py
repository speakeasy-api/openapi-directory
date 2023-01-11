import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fundingpayorstatusauditresponse as shared_fundingpayorstatusauditresponse
from ..shared import linkforresponse as shared_linkforresponse
from ..shared import pageforresponse as shared_pageforresponse


@dataclass_json
@dataclasses.dataclass
class PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse:
    content: Optional[list[shared_fundingpayorstatusauditresponse.FundingPayorStatusAuditResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[shared_linkforresponse.LinkForResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[shared_pageforresponse.PageForResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
