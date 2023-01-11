import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InstitutionsGetByIDRequestOptions:
    r"""InstitutionsGetByIDRequestOptions
    Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
    """
    
    include_optional_metadata: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_optional_metadata') }})
    include_payment_initiation_metadata: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_payment_initiation_metadata') }})
    include_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_status') }})
    
