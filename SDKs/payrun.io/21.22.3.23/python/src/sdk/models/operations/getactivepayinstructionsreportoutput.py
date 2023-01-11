import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetActivePayInstructionsReportOutputQueryParams:
    employee_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    from_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'FromDate', 'style': 'form', 'explode': True }})
    active_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ActiveOn', 'style': 'form', 'explode': True }})
    to_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ToDate', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActivePayInstructionsReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActivePayInstructionsReportOutputRequest:
    headers: GetActivePayInstructionsReportOutputHeaders = dataclasses.field()
    query_params: GetActivePayInstructionsReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActivePayInstructionsReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_active_pay_instructions_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
