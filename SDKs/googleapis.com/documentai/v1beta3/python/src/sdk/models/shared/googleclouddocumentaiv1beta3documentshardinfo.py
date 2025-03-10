"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDocumentaiV1beta3DocumentShardInfo:
    r"""For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is."""
    
    shard_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shardCount'), 'exclude': lambda f: f is None }})
    r"""Total number of shards."""  
    shard_index: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shardIndex'), 'exclude': lambda f: f is None }})
    r"""The 0-based index of this shard."""  
    text_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('textOffset'), 'exclude': lambda f: f is None }})
    r"""The index of the first character in Document.text in the overall document global text."""  
    