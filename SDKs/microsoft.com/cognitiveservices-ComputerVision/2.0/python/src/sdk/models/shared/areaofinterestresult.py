"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import boundingrect as shared_boundingrect
from ..shared import imagemetadata as shared_imagemetadata
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AreaOfInterestResult:
    r"""Result of AreaOfInterest operation."""
    
    area_of_interest: Optional[shared_boundingrect.BoundingRect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('areaOfInterest'), 'exclude': lambda f: f is None }})
    r"""A bounding box for an area inside an image."""  
    metadata: Optional[shared_imagemetadata.ImageMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('metadata'), 'exclude': lambda f: f is None }})
    r"""Image metadata."""  
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId'), 'exclude': lambda f: f is None }})
    r"""Id of the REST API request."""  
    