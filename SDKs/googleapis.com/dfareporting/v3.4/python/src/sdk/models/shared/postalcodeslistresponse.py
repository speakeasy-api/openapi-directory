import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postalcode as shared_postalcode


@dataclass_json
@dataclasses.dataclass
class PostalCodesListResponse:
    r"""PostalCodesListResponse
    Postal Code List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    postal_codes: Optional[list[shared_postalcode.PostalCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodes') }})
    
