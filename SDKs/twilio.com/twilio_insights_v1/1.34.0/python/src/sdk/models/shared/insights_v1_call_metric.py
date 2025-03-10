from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class InsightsV1CallMetric:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid' }})
    carrier_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier_edge' }})
    client_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_edge' }})
    direction: Optional[shared.MetricEnumStreamDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    edge: Optional[shared.MetricEnumTwilioEdgeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edge' }})
    sdk_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdk_edge' }})
    sip_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sip_edge' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
