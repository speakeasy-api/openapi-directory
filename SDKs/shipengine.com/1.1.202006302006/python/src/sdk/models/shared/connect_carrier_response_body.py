import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectCarrierResponseBody:
    r"""ConnectCarrierResponseBody
    A connect account response body
    """
    
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    
