import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obreaddatastatement2 as shared_obreaddatastatement2
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObReadStatement2:
    data: shared_obreaddatastatement2.ObReadDataStatement2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
