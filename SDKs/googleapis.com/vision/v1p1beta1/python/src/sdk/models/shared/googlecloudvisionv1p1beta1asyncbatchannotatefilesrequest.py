"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudvisionv1p1beta1asyncannotatefilerequest as shared_googlecloudvisionv1p1beta1asyncannotatefilerequest
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest:
    r"""Multiple async file annotation requests are batched into a single service call."""
    
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('parent'), 'exclude': lambda f: f is None }})
    r"""Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`."""  
    requests: Optional[list[shared_googlecloudvisionv1p1beta1asyncannotatefilerequest.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requests'), 'exclude': lambda f: f is None }})
    r"""Required. Individual async file annotation requests for this batch."""  
    