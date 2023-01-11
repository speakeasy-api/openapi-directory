import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entrycontent as shared_entrycontent
from ..shared import entrylink as shared_entrylink
from ..shared import keymaterial as shared_keymaterial


@dataclass_json
@dataclasses.dataclass
class DataNotification:
    entries: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    key_material: shared_keymaterial.KeyMaterial = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyMaterial') }})
    page_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCount') }})
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
