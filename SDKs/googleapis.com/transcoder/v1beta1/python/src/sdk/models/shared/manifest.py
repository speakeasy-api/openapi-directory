import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ManifestTypeEnum(str, Enum):
    MANIFEST_TYPE_UNSPECIFIED = "MANIFEST_TYPE_UNSPECIFIED"
    HLS = "HLS"
    DASH = "DASH"


@dataclass_json
@dataclasses.dataclass
class Manifest:
    r"""Manifest
    Manifest configuration.
    """
    
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    mux_streams: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muxStreams') }})
    type: Optional[ManifestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
