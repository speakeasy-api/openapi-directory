import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldtypedefinition as shared_fieldtypedefinition

class InputFieldDefinitionSupportedValueTypesEnum(str, Enum):
    STATIC_VALUE = "STATIC_VALUE"
    OBJECT_PROPERTY = "OBJECT_PROPERTY"
    FIELD_DATA = "FIELD_DATA"


@dataclass_json
@dataclasses.dataclass
class InputFieldDefinition:
    r"""InputFieldDefinition
    Configuration for an input field on the custom action
    """
    
    is_required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRequired') }})
    type_definition: shared_fieldtypedefinition.FieldTypeDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeDefinition') }})
    supported_value_types: Optional[list[InputFieldDefinitionSupportedValueTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedValueTypes') }})
    
