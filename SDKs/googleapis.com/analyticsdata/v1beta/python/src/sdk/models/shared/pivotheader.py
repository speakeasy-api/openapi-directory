"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import pivotdimensionheader as shared_pivotdimensionheader
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PivotHeader:
    r"""Dimensions' values in a single pivot."""
    
    pivot_dimension_headers: Optional[list[shared_pivotdimensionheader.PivotDimensionHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pivotDimensionHeaders'), 'exclude': lambda f: f is None }})
    r"""The size is the same as the cardinality of the corresponding dimension combinations."""  
    row_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rowCount'), 'exclude': lambda f: f is None }})
    r"""The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters `offset` and `limit` are specified in the request."""  
    