"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import share as shared_share
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListSharesResponse:
    r"""ListSharesResponse is the result of ListSharesRequest."""
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})
    r"""The token you can use to retrieve the next page of results. Not returned if there are no more results in the list."""  
    shares: Optional[list[shared_share.Share]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shares'), 'exclude': lambda f: f is None }})
    r"""A list of shares in the project for the specified instance."""  
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unreachable'), 'exclude': lambda f: f is None }})
    r"""Locations that could not be reached."""  
    