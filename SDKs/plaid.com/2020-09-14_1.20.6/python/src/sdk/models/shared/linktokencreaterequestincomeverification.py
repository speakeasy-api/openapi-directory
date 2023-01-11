import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinkTokenCreateRequestIncomeVerification:
    r"""LinkTokenCreateRequestIncomeVerification
    Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
    """
    
    income_verification_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification_id') }})
    asset_report_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_id') }})
    
