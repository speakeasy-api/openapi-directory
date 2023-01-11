import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import renderresponsedata as shared_renderresponsedata


@dataclass_json
@dataclasses.dataclass
class RenderResponse:
    r"""RenderResponse
    The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: shared_renderresponsedata.RenderResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
