import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class RootV1StatisticsConsolidatedQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AppId', 'style': 'form', 'explode': True }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CompanyId', 'style': 'form', 'explode': True }})
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeviceToken', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RootV1StatisticsConsolidatedRequest:
    query_params: RootV1StatisticsConsolidatedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RootV1StatisticsConsolidatedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
