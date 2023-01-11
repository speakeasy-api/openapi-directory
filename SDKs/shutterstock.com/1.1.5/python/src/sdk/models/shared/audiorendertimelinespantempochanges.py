import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpanTempoChanges:
    r"""AudioRenderTimelineSpanTempoChanges
    An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
    """
    
    tempo: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempo') }})
    time: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
