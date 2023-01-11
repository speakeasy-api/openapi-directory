import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1RiceDeltaEncoding:
    r"""GoogleCloudWebriskV1RiceDeltaEncoding
    The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
    """
    
    encoded_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodedData') }})
    entry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryCount') }})
    first_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstValue') }})
    rice_parameter: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceParameter') }})
    
