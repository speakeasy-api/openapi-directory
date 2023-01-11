import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import _embedded as shared__embedded
from ..shared import links as shared_links


@dataclass_json
@dataclasses.dataclass
class Applications:
    embedded: shared__embedded.Embedded = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: shared_links.Links = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_index: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_index') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    
