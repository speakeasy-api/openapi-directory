"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetIosReopenAttributionRequest:
    r"""Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests."""
    
    bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bundleId'), 'exclude': lambda f: f is None }})
    r"""APP bundle ID."""  
    requested_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestedLink'), 'exclude': lambda f: f is None }})
    r"""FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/"""  
    sdk_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sdkVersion'), 'exclude': lambda f: f is None }})
    r"""Google SDK version. Version takes the form \\"$major.$minor.$patch\\" """  
    