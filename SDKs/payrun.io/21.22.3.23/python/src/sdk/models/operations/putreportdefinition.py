import dataclasses
from typing import Optional
from ..shared import reportdefinition as shared_reportdefinition
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutReportDefinitionPathParams:
    report_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReportDefinitionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReportDefinitionRequest:
    headers: PutReportDefinitionHeaders = dataclasses.field()
    path_params: PutReportDefinitionPathParams = dataclasses.field()
    request: shared_reportdefinition.ReportDefinition = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutReportDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    report_definition: Optional[shared_reportdefinition.ReportDefinition] = dataclasses.field(default=None)
    
