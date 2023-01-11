import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectdpayloaderror as shared_collectdpayloaderror
from ..shared import createtimeseriessummary as shared_createtimeseriessummary


@dataclass_json
@dataclasses.dataclass
class CreateCollectdTimeSeriesResponse:
    r"""CreateCollectdTimeSeriesResponse
    The CreateCollectdTimeSeries response.
    """
    
    payload_errors: Optional[list[shared_collectdpayloaderror.CollectdPayloadError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadErrors') }})
    summary: Optional[shared_createtimeseriessummary.CreateTimeSeriesSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
