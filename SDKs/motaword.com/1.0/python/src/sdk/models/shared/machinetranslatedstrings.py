import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monetary as shared_monetary
from ..shared import clientstringwithtranslations as shared_clientstringwithtranslations


@dataclass_json
@dataclasses.dataclass
class MachineTranslatedStrings:
    cost: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    strings: Optional[list[shared_clientstringwithtranslations.ClientStringWithTranslations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strings') }})
    
