import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import posdataprovidersposdataprovider as shared_posdataprovidersposdataprovider


@dataclass_json
@dataclasses.dataclass
class PosDataProviders:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    pos_data_providers: Optional[list[shared_posdataprovidersposdataprovider.PosDataProvidersPosDataProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProviders') }})
    
