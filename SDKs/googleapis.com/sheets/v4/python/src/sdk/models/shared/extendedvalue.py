"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import errorvalue as shared_errorvalue
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ExtendedValue:
    r"""The kinds of value that a cell in a spreadsheet can have."""
    
    bool_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('boolValue'), 'exclude': lambda f: f is None }})
    r"""Represents a boolean value."""  
    error_value: Optional[shared_errorvalue.ErrorValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorValue'), 'exclude': lambda f: f is None }})
    r"""An error in a cell."""  
    formula_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('formulaValue'), 'exclude': lambda f: f is None }})
    r"""Represents a formula."""  
    number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('numberValue'), 'exclude': lambda f: f is None }})
    r"""Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format."""  
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stringValue'), 'exclude': lambda f: f is None }})
    r"""Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `\\"123\\"`."""  
    