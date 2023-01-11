import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import singlefielddependency as shared_singlefielddependency
from ..shared import conditionalsinglefielddependency as shared_conditionalsinglefielddependency
from ..shared import inputfielddefinition as shared_inputfielddefinition
from ..shared import actionlabels as shared_actionlabels
from ..shared import objectrequestoptions as shared_objectrequestoptions


@dataclass_json
@dataclasses.dataclass
class ExtensionActionDefinitionPatch:
    r"""ExtensionActionDefinitionPatch
    Fields on custom workflow action to be updated.
    """
    
    action_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionUrl') }})
    input_field_dependencies: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFieldDependencies') }})
    input_fields: Optional[list[shared_inputfielddefinition.InputFieldDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFields') }})
    labels: Optional[dict[str, shared_actionlabels.ActionLabels]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    object_request_options: Optional[shared_objectrequestoptions.ObjectRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectRequestOptions') }})
    object_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    published: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    
