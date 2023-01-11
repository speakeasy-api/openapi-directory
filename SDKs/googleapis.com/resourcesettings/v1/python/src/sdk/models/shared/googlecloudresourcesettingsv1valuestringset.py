import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudResourcesettingsV1ValueStringSet:
    r"""GoogleCloudResourcesettingsV1ValueStringSet
    A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.
    """
    
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
