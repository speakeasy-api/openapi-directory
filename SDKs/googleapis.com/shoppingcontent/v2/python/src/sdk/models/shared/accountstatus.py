import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountstatusaccountlevelissue as shared_accountstatusaccountlevelissue
from ..shared import accountstatusdataqualityissue as shared_accountstatusdataqualityissue
from ..shared import accountstatusproducts as shared_accountstatusproducts


@dataclass_json
@dataclasses.dataclass
class AccountStatus:
    r"""AccountStatus
    The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_level_issues: Optional[list[shared_accountstatusaccountlevelissue.AccountStatusAccountLevelIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLevelIssues') }})
    data_quality_issues: Optional[list[shared_accountstatusdataqualityissue.AccountStatusDataQualityIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityIssues') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    products: Optional[list[shared_accountstatusproducts.AccountStatusProducts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    website_claimed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteClaimed') }})
    
