import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetPassReportOuputQueryParams:
    document_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DocumentId', 'style': 'form', 'explode': True }})
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    intermediary_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'IntermediaryId', 'style': 'form', 'explode': True }})
    message_function_code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'MessageFunctionCode', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    pension_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PensionKey', 'style': 'form', 'explode': True }})
    tax_year: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    payment_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PaymentDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPassReportOuputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPassReportOuputRequest:
    headers: GetPassReportOuputHeaders = dataclasses.field()
    query_params: GetPassReportOuputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPassReportOuputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_pass_report_ouput_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
