import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkTrafficAnalysisPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum(str, Enum):
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class UpdateNetworkTrafficAnalysisRequestBodyModeEnum(str, Enum):
    DISABLED = "disabled"
    BASIC = "basic"
    DETAILED = "detailed"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkTrafficAnalysisRequestBody:
    custom_pie_chart_items: Optional[list[UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPieChartItems') }})
    mode: Optional[UpdateNetworkTrafficAnalysisRequestBodyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclasses.dataclass
class UpdateNetworkTrafficAnalysisRequest:
    path_params: UpdateNetworkTrafficAnalysisPathParams = dataclasses.field()
    request: Optional[UpdateNetworkTrafficAnalysisRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkTrafficAnalysisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_traffic_analysis_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
