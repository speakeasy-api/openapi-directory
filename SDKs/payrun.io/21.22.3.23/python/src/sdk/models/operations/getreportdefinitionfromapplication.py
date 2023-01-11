import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import reportdefinition as shared_reportdefinition


@dataclasses.dataclass
class GetReportDefinitionFromApplicationPathParams:
    report_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportDefinitionFromApplicationHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportDefinitionFromApplicationRequest:
    headers: GetReportDefinitionFromApplicationHeaders = dataclasses.field()
    path_params: GetReportDefinitionFromApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportDefinitionFromApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    report_definition: Optional[shared_reportdefinition.ReportDefinition] = dataclasses.field(default=None)
    
