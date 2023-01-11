import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetGrossToNetReportOutputQueryParams:
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    tax_year: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGrossToNetReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGrossToNetReportOutputRequest:
    headers: GetGrossToNetReportOutputHeaders = dataclasses.field()
    query_params: GetGrossToNetReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGrossToNetReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_gross_to_net_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
