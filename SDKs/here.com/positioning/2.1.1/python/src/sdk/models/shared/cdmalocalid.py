import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CdmaLocalID:
    r"""CdmaLocalID
    Local identification parameters of CDMA serving cell
    """
    
    channel: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    pn_offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnOffset') }})
    
