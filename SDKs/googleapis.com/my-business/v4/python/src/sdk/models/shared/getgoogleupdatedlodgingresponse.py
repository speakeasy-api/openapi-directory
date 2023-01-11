import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lodging as shared_lodging


@dataclass_json
@dataclasses.dataclass
class GetGoogleUpdatedLodgingResponse:
    r"""GetGoogleUpdatedLodgingResponse
    Response message for LodgingService.GetGoogleUpdatedLodging
    """
    
    diff_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffMask') }})
    lodging: Optional[shared_lodging.Lodging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lodging') }})
    
