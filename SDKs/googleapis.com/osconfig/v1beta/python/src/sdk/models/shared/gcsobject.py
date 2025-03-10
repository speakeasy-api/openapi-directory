"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GcsObject:
    r"""Google Cloud Storage object representation."""
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bucket'), 'exclude': lambda f: f is None }})
    r"""Required. Bucket of the Google Cloud Storage object."""  
    generation_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('generationNumber'), 'exclude': lambda f: f is None }})
    r"""Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change."""  
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('object'), 'exclude': lambda f: f is None }})
    r"""Required. Name of the Google Cloud Storage object."""  
    