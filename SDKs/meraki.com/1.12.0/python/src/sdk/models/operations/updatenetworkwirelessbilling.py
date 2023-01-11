import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessBillingPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits:
    r"""UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
    The uplink bandwidth settings for the pricing plan.
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    
class UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum(str, Enum):
    ONE_HOUR = "1 hour"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"
    THIRTY_DAYS = "30 days"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessBillingRequestBodyPlans:
    bandwidth_limits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    time_limit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeLimit') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessBillingRequestBody:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    plans: Optional[list[UpdateNetworkWirelessBillingRequestBodyPlans]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plans') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessBillingRequest:
    path_params: UpdateNetworkWirelessBillingPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessBillingRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessBillingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_billing_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
