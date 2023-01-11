import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requestedscopes as shared_requestedscopes

class ConnectedApplicationProductDataTypesEnum(str, Enum):
    ACCOUNT_BALANCE = "ACCOUNT_BALANCE"
    ACCOUNT_USER_INFO = "ACCOUNT_USER_INFO"
    ACCOUNT_TRANSACTIONS = "ACCOUNT_TRANSACTIONS"


@dataclass_json
@dataclasses.dataclass
class ConnectedApplication:
    r"""ConnectedApplication
    Describes the connected application for a particular end user.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    application_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_url') }})
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    logo: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    logo_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_data_types: list[ConnectedApplicationProductDataTypesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_data_types') }})
    reason_for_access: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason_for_access') }})
    requested_scopes: Optional[shared_requestedscopes.RequestedScopes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_scopes') }})
    scopes: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
