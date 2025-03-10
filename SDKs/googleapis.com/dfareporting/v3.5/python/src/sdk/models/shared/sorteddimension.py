"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class SortedDimensionSortOrderEnum(str, Enum):
    r"""An optional sort order for the dimension column."""
    ASCENDING = 'ASCENDING'
    DESCENDING = 'DESCENDING'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SortedDimension:
    r"""Represents a sorted dimension."""
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""The kind of resource this is, in this case dfareporting#sortedDimension."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the dimension."""  
    sort_order: Optional[SortedDimensionSortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sortOrder'), 'exclude': lambda f: f is None }})
    r"""An optional sort order for the dimension column."""  
    