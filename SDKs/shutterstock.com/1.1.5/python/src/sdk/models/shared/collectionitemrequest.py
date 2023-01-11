import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectionitem as shared_collectionitem


@dataclass_json
@dataclasses.dataclass
class CollectionItemRequest:
    r"""CollectionItemRequest
    Request to get a list of items in a collection
    """
    
    items: list[shared_collectionitem.CollectionItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
