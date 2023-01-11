import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportExportStats:
    r"""ImportExportStats
    Global stats for the current Otoroshi instances
    """
    
    calls: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls') }})
    data_in: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataIn') }})
    data_out: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataOut') }})
    
