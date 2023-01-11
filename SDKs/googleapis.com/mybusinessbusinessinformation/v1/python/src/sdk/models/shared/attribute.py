import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repeatedenumattributevalue as shared_repeatedenumattributevalue
from ..shared import uriattributevalue as shared_uriattributevalue

class AttributeValueTypeEnum(str, Enum):
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    ENUM = "ENUM"
    URL = "URL"
    REPEATED_ENUM = "REPEATED_ENUM"


@dataclass_json
@dataclasses.dataclass
class Attribute:
    r"""Attribute
    A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    repeated_enum_value: Optional[shared_repeatedenumattributevalue.RepeatedEnumAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatedEnumValue') }})
    uri_values: Optional[list[shared_uriattributevalue.URIAttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriValues') }})
    value_type: Optional[AttributeValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    values: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclasses.dataclass
class AttributeInput:
    r"""AttributeInput
    A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    repeated_enum_value: Optional[shared_repeatedenumattributevalue.RepeatedEnumAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatedEnumValue') }})
    uri_values: Optional[list[shared_uriattributevalue.URIAttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriValues') }})
    values: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
