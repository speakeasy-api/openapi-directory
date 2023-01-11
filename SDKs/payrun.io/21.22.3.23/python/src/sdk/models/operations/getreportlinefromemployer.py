import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import reportline as shared_reportline


@dataclasses.dataclass
class GetReportLineFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    report_line_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReportLineId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportLineFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportLineFromEmployerRequest:
    headers: GetReportLineFromEmployerHeaders = dataclasses.field()
    path_params: GetReportLineFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportLineFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    report_line: Optional[shared_reportline.ReportLine] = dataclasses.field(default=None)
    
