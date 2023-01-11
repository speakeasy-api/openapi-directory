import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamegeoin as shared_firstlastnamegeoin


@dataclass_json
@dataclasses.dataclass
class CorridorIn:
    r"""CorridorIn
    Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
    """
    
    first_last_name_geo_from: Optional[shared_firstlastnamegeoin.FirstLastNameGeoIn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLastNameGeoFrom') }})
    first_last_name_geo_to: Optional[shared_firstlastnamegeoin.FirstLastNameGeoIn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLastNameGeoTo') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
