import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adbreak as shared_adbreak
from ..shared import editatom as shared_editatom
from ..shared import elementarystream as shared_elementarystream
from ..shared import input as shared_input
from ..shared import manifest as shared_manifest
from ..shared import muxstream as shared_muxstream
from ..shared import output as shared_output
from ..shared import overlay as shared_overlay
from ..shared import pubsubdestination as shared_pubsubdestination
from ..shared import spritesheet as shared_spritesheet


@dataclass_json
@dataclasses.dataclass
class JobConfig:
    r"""JobConfig
    Job configuration
    """
    
    ad_breaks: Optional[list[shared_adbreak.AdBreak]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adBreaks') }})
    edit_list: Optional[list[shared_editatom.EditAtom]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editList') }})
    elementary_streams: Optional[list[shared_elementarystream.ElementaryStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementaryStreams') }})
    inputs: Optional[list[shared_input.Input]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    manifests: Optional[list[shared_manifest.Manifest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifests') }})
    mux_streams: Optional[list[shared_muxstream.MuxStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muxStreams') }})
    output: Optional[shared_output.Output] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    overlays: Optional[list[shared_overlay.Overlay]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlays') }})
    pubsub_destination: Optional[shared_pubsubdestination.PubsubDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubDestination') }})
    sprite_sheets: Optional[list[shared_spritesheet.SpriteSheet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spriteSheets') }})
    
