import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InstitutionsSearchRequestOptions:
    r"""InstitutionsSearchRequestOptions
    An optional object to filter `/institutions/search` results.
    """
    
    include_optional_metadata: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_optional_metadata') }})
    include_payment_initiation_metadata: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_payment_initiation_metadata') }})
    oauth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth') }})
    payment_initiation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_initiation') }})
    
