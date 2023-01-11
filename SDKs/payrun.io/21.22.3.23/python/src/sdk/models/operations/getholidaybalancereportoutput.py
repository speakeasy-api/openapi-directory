import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetHolidayBalanceReportOutputQueryParams:
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    holiday_year_end: date = dataclasses.field(metadata={'query_param': { 'field_name': 'HolidayYearEnd', 'style': 'form', 'explode': True }})
    employee_codes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EmployeeCodes', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHolidayBalanceReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHolidayBalanceReportOutputRequest:
    headers: GetHolidayBalanceReportOutputHeaders = dataclasses.field()
    query_params: GetHolidayBalanceReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHolidayBalanceReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_holiday_balance_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
