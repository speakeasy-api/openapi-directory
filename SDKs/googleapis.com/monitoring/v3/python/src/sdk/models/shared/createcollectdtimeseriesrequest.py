import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectdpayload as shared_collectdpayload
from ..shared import monitoredresource as shared_monitoredresource


@dataclass_json
@dataclasses.dataclass
class CreateCollectdTimeSeriesRequest:
    r"""CreateCollectdTimeSeriesRequest
    The CreateCollectdTimeSeries request.
    """
    
    collectd_payloads: Optional[list[shared_collectdpayload.CollectdPayload]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectdPayloads') }})
    collectd_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectdVersion') }})
    resource: Optional[shared_monitoredresource.MonitoredResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
