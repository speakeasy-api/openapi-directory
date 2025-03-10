"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest:
    r"""Request for LinkAppsScriptProject rpc call."""
    
    script_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scriptId'), 'exclude': lambda f: f is None }})
    r"""The id of the Apps Script project to be linked."""  
    