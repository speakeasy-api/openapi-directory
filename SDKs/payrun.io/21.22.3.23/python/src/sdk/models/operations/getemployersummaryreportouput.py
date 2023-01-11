import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetEmployerSummaryReportOuputQueryParams:
    context_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'ContextDate', 'style': 'form', 'explode': True }})
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmployerSummaryReportOuputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerSummaryReportOuputRequest:
    headers: GetEmployerSummaryReportOuputHeaders = dataclasses.field()
    query_params: GetEmployerSummaryReportOuputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployerSummaryReportOuputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_employer_summary_report_ouput_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
