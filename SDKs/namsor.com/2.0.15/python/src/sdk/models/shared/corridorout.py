import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamediasporaedout as shared_firstlastnamediasporaedout
from ..shared import firstlastnamegenderedout as shared_firstlastnamegenderedout
from ..shared import firstlastnameoriginedout as shared_firstlastnameoriginedout


@dataclass_json
@dataclasses.dataclass
class CorridorOut:
    r"""CorridorOut
    Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
    """
    
    first_last_name_diasporaed_out: Optional[shared_firstlastnamediasporaedout.FirstLastNameDiasporaedOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameDiasporaedOut') }})
    first_last_name_gendered_out: Optional[shared_firstlastnamegenderedout.FirstLastNameGenderedOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameGenderedOut') }})
    first_last_name_origined_out: Optional[shared_firstlastnameoriginedout.FirstLastNameOriginedOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameOriginedOut') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
