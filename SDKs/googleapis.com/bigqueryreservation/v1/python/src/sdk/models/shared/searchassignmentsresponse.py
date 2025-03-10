"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import assignment as shared_assignment
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SearchAssignmentsResponse:
    r"""The response for ReservationService.SearchAssignments."""
    
    assignments: Optional[list[shared_assignment.Assignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('assignments'), 'exclude': lambda f: f is None }})
    r"""List of assignments visible to the user."""  
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})
    r"""Token to retrieve the next page of results, or empty if there are no more results in the list."""  
    