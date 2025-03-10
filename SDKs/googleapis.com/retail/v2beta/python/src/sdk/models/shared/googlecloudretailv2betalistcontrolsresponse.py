"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudretailv2betacontrol as shared_googlecloudretailv2betacontrol
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudRetailV2betaListControlsResponse:
    r"""Response for ListControls method."""
    
    controls: Optional[list[shared_googlecloudretailv2betacontrol.GoogleCloudRetailV2betaControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('controls'), 'exclude': lambda f: f is None }})
    r"""All the Controls for a given catalog."""  
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})
    r"""Pagination token, if not returned indicates the last page."""  
    