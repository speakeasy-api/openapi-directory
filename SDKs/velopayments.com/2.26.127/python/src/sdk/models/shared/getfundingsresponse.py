import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fundingaudit as shared_fundingaudit


@dataclass_json
@dataclasses.dataclass
class GetFundingsResponse:
    r"""GetFundingsResponse
    List Users Response Object
    """
    
    content: Optional[list[shared_fundingaudit.FundingAudit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
