import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asyncoptions as shared_asyncoptions
from ..shared import inputmapping as shared_inputmapping
from ..shared import validationoptions as shared_validationoptions


@dataclass_json
@dataclasses.dataclass
class Options:
    r"""Options
    Options allows customized resource handling by Deployment Manager.
    """
    
    async_options: Optional[list[shared_asyncoptions.AsyncOptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asyncOptions') }})
    input_mappings: Optional[list[shared_inputmapping.InputMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputMappings') }})
    name_property: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameProperty') }})
    validation_options: Optional[shared_validationoptions.ValidationOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationOptions') }})
    
