import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linksmeta as shared_linksmeta
from ..shared import responsivity as shared_responsivity


@dataclass_json
@dataclasses.dataclass
class ResponsivityList:
    links: Optional[shared_linksmeta.LinksMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    responsivity: Optional[list[shared_responsivity.Responsivity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsivity') }})
    
