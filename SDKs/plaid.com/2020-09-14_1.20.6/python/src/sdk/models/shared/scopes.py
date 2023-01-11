import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaccess as shared_accountaccess


@dataclass_json
@dataclasses.dataclass
class Scopes:
    r"""Scopes
    The scopes object
    """
    
    accounts: Optional[list[shared_accountaccess.AccountAccess]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    new_accounts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_accounts') }})
    product_access: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_access') }})
    
