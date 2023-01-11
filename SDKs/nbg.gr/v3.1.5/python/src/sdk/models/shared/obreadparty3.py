import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obreaddataparty3 as shared_obreaddataparty3
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObReadParty3:
    data: shared_obreaddataparty3.ObReadDataParty3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
