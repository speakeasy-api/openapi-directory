"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment:
    r"""A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset"""
    
    end_index: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endIndex'), 'exclude': lambda f: f is None }})
    r"""TextSegment half open end UTF-8 char index in the Document.text."""  
    start_index: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('startIndex'), 'exclude': lambda f: f is None }})
    r"""TextSegment start UTF-8 char index in the Document.text."""  
    