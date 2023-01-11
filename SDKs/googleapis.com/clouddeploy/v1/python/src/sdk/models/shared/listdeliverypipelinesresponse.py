import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverypipeline as shared_deliverypipeline


@dataclass_json
@dataclasses.dataclass
class ListDeliveryPipelinesResponse:
    r"""ListDeliveryPipelinesResponse
    The response object from `ListDeliveryPipelines`.
    """
    
    delivery_pipelines: Optional[list[shared_deliverypipeline.DeliveryPipeline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPipelines') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
