import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forwardpaging as shared_forwardpaging
from ..shared import extensionactiondefinition as shared_extensionactiondefinition


@dataclass_json
@dataclasses.dataclass
class CollectionResponseExtensionActionDefinitionForwardPaging:
    results: list[shared_extensionactiondefinition.ExtensionActionDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    paging: Optional[shared_forwardpaging.ForwardPaging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    
