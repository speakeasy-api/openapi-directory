import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queuedresponsedata as shared_queuedresponsedata


@dataclass_json
@dataclasses.dataclass
class QueuedResponse:
    r"""QueuedResponse
    The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: shared_queuedresponsedata.QueuedResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
