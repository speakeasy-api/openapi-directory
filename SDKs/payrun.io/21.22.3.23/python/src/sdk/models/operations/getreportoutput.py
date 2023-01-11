import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetReportOutputPathParams:
    report_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportOutputRequest:
    headers: GetReportOutputHeaders = dataclasses.field()
    path_params: GetReportOutputPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
