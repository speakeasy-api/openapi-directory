import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import application as shared_application


@dataclass_json
@dataclasses.dataclass
class ApplicationGetResponse:
    r"""ApplicationGetResponse
    The request ID associated with this call.
    """
    
    application: shared_application.Application = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
