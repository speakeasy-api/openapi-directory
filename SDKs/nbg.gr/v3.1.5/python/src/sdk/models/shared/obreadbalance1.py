import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obreaddatabalance1 as shared_obreaddatabalance1
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObReadBalance1:
    data: shared_obreaddatabalance1.ObReadDataBalance1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: shared_links.Links = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: shared_meta.Meta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
