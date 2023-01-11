import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carrierscarrier as shared_carrierscarrier


@dataclass_json
@dataclasses.dataclass
class ShippingsettingsGetSupportedCarriersResponse:
    carriers: Optional[list[shared_carrierscarrier.CarriersCarrier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carriers') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
