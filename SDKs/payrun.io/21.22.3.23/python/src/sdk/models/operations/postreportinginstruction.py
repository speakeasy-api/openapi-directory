import dataclasses
from typing import Optional
from ..shared import reportinginstruction as shared_reportinginstruction
from ..shared import errormodel as shared_errormodel
from ..shared import link as shared_link


@dataclasses.dataclass
class PostReportingInstructionPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReportingInstructionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReportingInstructionRequest:
    headers: PostReportingInstructionHeaders = dataclasses.field()
    path_params: PostReportingInstructionPathParams = dataclasses.field()
    request: shared_reportinginstruction.ReportingInstruction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostReportingInstructionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link: Optional[shared_link.Link] = dataclasses.field(default=None)
    
