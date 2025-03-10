"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import disputeevidence as shared_disputeevidence
from ..shared import error as shared_error
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListDisputeEvidenceResponse:
    r"""Defines the fields in a `ListDisputeEvidence` response."""
    
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cursor'), 'exclude': lambda f: f is None }})
    r"""The pagination cursor to be used in a subsequent request.
    If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
    """  
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errors'), 'exclude': lambda f: f is None }})
    r"""Information about errors encountered during the request."""  
    evidence: Optional[list[shared_disputeevidence.DisputeEvidence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('evidence'), 'exclude': lambda f: f is None }})
    r"""The list of evidence previously uploaded to the specified dispute."""  
    