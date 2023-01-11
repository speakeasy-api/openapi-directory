import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationca as shared_validationca


@dataclass_json
@dataclasses.dataclass
class MtlsPolicy:
    r"""MtlsPolicy
    Specification of the MTLSPolicy.
    """
    
    client_validation_ca: Optional[list[shared_validationca.ValidationCa]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientValidationCa') }})
    
