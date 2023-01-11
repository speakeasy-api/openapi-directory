import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetP32NetReportOutputQueryParams:
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    tax_year: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetP32NetReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetP32NetReportOutputRequest:
    headers: GetP32NetReportOutputHeaders = dataclasses.field()
    query_params: GetP32NetReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetP32NetReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_p32_net_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
