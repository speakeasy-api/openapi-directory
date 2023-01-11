import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobilecarrier as shared_mobilecarrier


@dataclass_json
@dataclasses.dataclass
class MobileCarriersListResponse:
    r"""MobileCarriersListResponse
    Mobile Carrier List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mobile_carriers: Optional[list[shared_mobilecarrier.MobileCarrier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileCarriers') }})
    
