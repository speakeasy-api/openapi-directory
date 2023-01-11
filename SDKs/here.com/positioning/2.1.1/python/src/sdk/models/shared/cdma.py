import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cdmalocalid as shared_cdmalocalid
from ..shared import cdmanmr as shared_cdmanmr


@dataclass_json
@dataclasses.dataclass
class Cdma:
    r"""Cdma
    CDMA measurement
    """
    
    bsid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    nid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    base_lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseLat') }})
    base_lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseLng') }})
    local_id: Optional[shared_cdmalocalid.CdmaLocalID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    nmr: Optional[list[shared_cdmanmr.CdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pilot_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotPower') }})
    rz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rz') }})
    
