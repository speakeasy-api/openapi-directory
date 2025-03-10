"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import conversionstatus as shared_conversionstatus
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConversionsBatchUpdateResponse:
    r"""Update Conversions Response."""
    
    has_failures: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hasFailures'), 'exclude': lambda f: f is None }})
    r"""Indicates that some or all conversions failed to update."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies what kind of resource this is. Value: the fixed string \\"dfareporting#conversionsBatchUpdateResponse\\"."""  
    status: Optional[list[shared_conversionstatus.ConversionStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})
    r"""The update status of each conversion. Statuses are returned in the same order that conversions are updated."""  
    