import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinkCollectionLinkCollectionLink:
    r"""LinkCollectionLinkCollectionLink
    The link collections' links
    """
    
    link: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    

@dataclass_json
@dataclasses.dataclass
class LinkCollectionLinkCollection:
    links: Optional[LinkCollectionLinkCollectionLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    

@dataclass_json
@dataclasses.dataclass
class LinkCollection:
    link_collection: Optional[LinkCollectionLinkCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkCollection') }})
    
