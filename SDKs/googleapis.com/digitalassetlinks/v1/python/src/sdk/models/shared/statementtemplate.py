import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclass_json
@dataclasses.dataclass
class StatementTemplate:
    r"""StatementTemplate
    A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
    """
    
    relation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation') }})
    source: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
