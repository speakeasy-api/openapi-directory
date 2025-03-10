"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import documentuploadstatusattributes as shared_documentuploadstatusattributes
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DocumentUploadStatus:
    r"""Status record for a previously initiated document submission."""
    
    attributes: shared_documentuploadstatusattributes.DocumentUploadStatusAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('attributes') }})  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""JSON API identifier"""  
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})
    r"""JSON API type specification"""  
    