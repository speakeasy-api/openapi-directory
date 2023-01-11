import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionfunction as shared_actionfunction
from ..shared import singlefielddependency as shared_singlefielddependency
from ..shared import conditionalsinglefielddependency as shared_conditionalsinglefielddependency
from ..shared import inputfielddefinition as shared_inputfielddefinition
from ..shared import actionlabels as shared_actionlabels
from ..shared import objectrequestoptions as shared_objectrequestoptions


@dataclass_json
@dataclasses.dataclass
class ExtensionActionDefinitionInput:
    r"""ExtensionActionDefinitionInput
    State of custom workflow action to be created.
    """
    
    action_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionUrl') }})
    functions: list[shared_actionfunction.ActionFunction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    input_fields: list[shared_inputfielddefinition.InputFieldDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFields') }})
    labels: dict[str, shared_actionlabels.ActionLabels] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    object_types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    published: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    archived_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archivedAt') }})
    input_field_dependencies: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFieldDependencies') }})
    object_request_options: Optional[shared_objectrequestoptions.ObjectRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectRequestOptions') }})
    
