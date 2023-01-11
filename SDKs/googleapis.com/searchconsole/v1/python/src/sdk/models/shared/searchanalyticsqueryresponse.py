import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apidatarow as shared_apidatarow

class SearchAnalyticsQueryResponseResponseAggregationTypeEnum(str, Enum):
    AUTO = "AUTO"
    BY_PROPERTY = "BY_PROPERTY"
    BY_PAGE = "BY_PAGE"


@dataclass_json
@dataclasses.dataclass
class SearchAnalyticsQueryResponse:
    r"""SearchAnalyticsQueryResponse
    A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
    """
    
    response_aggregation_type: Optional[SearchAnalyticsQueryResponseResponseAggregationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseAggregationType') }})
    rows: Optional[list[shared_apidatarow.APIDataRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
