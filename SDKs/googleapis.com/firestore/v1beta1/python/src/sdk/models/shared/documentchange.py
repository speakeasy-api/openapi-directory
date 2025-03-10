"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import document as shared_document
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DocumentChange:
    r"""A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected."""
    
    document: Optional[shared_document.Document] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('document'), 'exclude': lambda f: f is None }})
    r"""A Firestore document. Must not exceed 1 MiB - 4 bytes."""  
    removed_target_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('removedTargetIds'), 'exclude': lambda f: f is None }})
    r"""A set of target IDs for targets that no longer match this document."""  
    target_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('targetIds'), 'exclude': lambda f: f is None }})
    r"""A set of target IDs of targets that match this document."""  
    