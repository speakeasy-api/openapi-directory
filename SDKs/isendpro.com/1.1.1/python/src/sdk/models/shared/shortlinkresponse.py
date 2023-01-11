import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ShortlinkResponseEtatEtat:
    code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    shortlink: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortlink') }})
    

@dataclass_json
@dataclasses.dataclass
class ShortlinkResponseEtat:
    etat: Optional[list[ShortlinkResponseEtatEtat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    

@dataclass_json
@dataclasses.dataclass
class ShortlinkResponse:
    etat: Optional[ShortlinkResponseEtat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    
