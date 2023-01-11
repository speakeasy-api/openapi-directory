import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link


@dataclass_json
@dataclasses.dataclass
class Links:
    r"""Links
    A collection of links, which are references from this span to a span in the same or different trace.
    """
    
    dropped_links_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedLinksCount') }})
    link: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
