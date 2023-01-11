import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import posdataproviders as shared_posdataproviders


@dataclass_json
@dataclasses.dataclass
class LiasettingsListPosDataProvidersResponse:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pos_data_providers: Optional[list[shared_posdataproviders.PosDataProviders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProviders') }})
    
