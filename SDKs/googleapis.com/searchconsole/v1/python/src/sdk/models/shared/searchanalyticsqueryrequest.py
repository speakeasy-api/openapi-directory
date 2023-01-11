import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apidimensionfiltergroup as shared_apidimensionfiltergroup

class SearchAnalyticsQueryRequestAggregationTypeEnum(str, Enum):
    AUTO = "AUTO"
    BY_PROPERTY = "BY_PROPERTY"
    BY_PAGE = "BY_PAGE"

class SearchAnalyticsQueryRequestDataStateEnum(str, Enum):
    DATA_STATE_UNSPECIFIED = "DATA_STATE_UNSPECIFIED"
    FINAL = "FINAL"
    ALL = "ALL"

class SearchAnalyticsQueryRequestDimensionsEnum(str, Enum):
    DATE = "DATE"
    QUERY = "QUERY"
    PAGE = "PAGE"
    COUNTRY = "COUNTRY"
    DEVICE = "DEVICE"
    SEARCH_APPEARANCE = "SEARCH_APPEARANCE"

class SearchAnalyticsQueryRequestSearchTypeEnum(str, Enum):
    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    DISCOVER = "DISCOVER"
    GOOGLE_NEWS = "GOOGLE_NEWS"

class SearchAnalyticsQueryRequestTypeEnum(str, Enum):
    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    DISCOVER = "DISCOVER"
    GOOGLE_NEWS = "GOOGLE_NEWS"


@dataclass_json
@dataclasses.dataclass
class SearchAnalyticsQueryRequest:
    aggregation_type: Optional[SearchAnalyticsQueryRequestAggregationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    data_state: Optional[SearchAnalyticsQueryRequestDataStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataState') }})
    dimension_filter_groups: Optional[list[shared_apidimensionfiltergroup.APIDimensionFilterGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterGroups') }})
    dimensions: Optional[list[SearchAnalyticsQueryRequestDimensionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    row_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLimit') }})
    search_type: Optional[SearchAnalyticsQueryRequestSearchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    start_row: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startRow') }})
    type: Optional[SearchAnalyticsQueryRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
