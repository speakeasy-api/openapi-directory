import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppContextAppTypesEnum(str, Enum):
    NATIVE = "NATIVE"
    WEB = "WEB"


@dataclass_json
@dataclasses.dataclass
class AppContext:
    r"""AppContext
    Output only. The app type the restriction applies to for mobile device.
    """
    
    app_types: Optional[list[AppContextAppTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appTypes') }})
    
