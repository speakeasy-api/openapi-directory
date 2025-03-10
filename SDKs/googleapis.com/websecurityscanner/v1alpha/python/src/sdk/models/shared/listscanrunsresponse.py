"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import scanrun as shared_scanrun
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListScanRunsResponse:
    r"""Response for the `ListScanRuns` method."""
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})
    r"""Token to retrieve the next page of results, or empty if there are no more results in the list."""  
    scan_runs: Optional[list[shared_scanrun.ScanRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scanRuns'), 'exclude': lambda f: f is None }})
    r"""The list of ScanRuns returned."""  
    