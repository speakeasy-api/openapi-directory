"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import propertydefinition as shared_propertydefinition
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ObjectPropertyOptions:
    r"""The options for object properties."""
    
    subobject_properties: Optional[list[shared_propertydefinition.PropertyDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subobjectProperties'), 'exclude': lambda f: f is None }})
    r"""The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000."""  
    