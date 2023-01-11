import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountfilter as shared_accountfilter
from ..shared import accountselectioncardinality_enum as shared_accountselectioncardinality_enum


@dataclass_json
@dataclasses.dataclass
class RequestedScopes:
    r"""RequestedScopes
    Scope of required and optional account features or content from a ConnectedApplication.
    """
    
    account_selection_cardinality: shared_accountselectioncardinality_enum.AccountSelectionCardinalityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_selection_cardinality') }})
    optional_product_access: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional_product_access') }})
    required_product_access: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_product_access') }})
    account_filters: Optional[shared_accountfilter.AccountFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_filters') }})
    
