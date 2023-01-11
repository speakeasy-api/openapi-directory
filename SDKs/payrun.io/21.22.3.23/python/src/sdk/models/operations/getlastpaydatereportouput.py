import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetLastPayDateReportOuputQueryParams:
    employee_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLastPayDateReportOuputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLastPayDateReportOuputRequest:
    headers: GetLastPayDateReportOuputHeaders = dataclasses.field()
    query_params: GetLastPayDateReportOuputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLastPayDateReportOuputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_last_pay_date_report_ouput_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
