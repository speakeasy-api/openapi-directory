import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadataitem as shared_metadataitem


@dataclass_json
@dataclasses.dataclass
class Metadata:
    r"""Metadata
    A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
    """
    
    finger_print: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerPrint') }})
    items: Optional[list[shared_metadataitem.MetadataItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
