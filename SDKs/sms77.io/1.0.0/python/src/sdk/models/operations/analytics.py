import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AnalyticsGroupByEnum(str, Enum):
    DATE = "date"
    LABEL = "label"
    SUBACCOUNT = "subaccount"
    COUNTRY = "country"


@dataclasses.dataclass
class AnalyticsQueryParams:
    end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    group_by: Optional[AnalyticsGroupByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_by', 'style': 'form', 'explode': True }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subaccounts: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subaccounts', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Analytics200ApplicationJSON:
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    direct: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct') }})
    economy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('economy') }})
    hlr: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hlr') }})
    inbound: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound') }})
    mnp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnp') }})
    usage_eur: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_eur') }})
    voice: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    

@dataclasses.dataclass
class AnalyticsRequest:
    query_params: AnalyticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    analytics_200_application_json_object: Optional[Analytics200ApplicationJSON] = dataclasses.field(default=None)
    
