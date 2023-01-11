import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetPayslip3ReportOutputQueryParams:
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    tax_year: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    employee_codes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EmployeeCodes', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    payment_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PaymentDate', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayslip3ReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayslip3ReportOutputRequest:
    headers: GetPayslip3ReportOutputHeaders = dataclasses.field()
    query_params: GetPayslip3ReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayslip3ReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_payslip3_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
