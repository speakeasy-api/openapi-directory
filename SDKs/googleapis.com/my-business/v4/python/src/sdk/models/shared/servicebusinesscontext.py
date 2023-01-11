import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postaladdress as shared_postaladdress


@dataclass_json
@dataclasses.dataclass
class ServiceBusinessContext:
    r"""ServiceBusinessContext
    Additional data for service business verification.
    """
    
    address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    
