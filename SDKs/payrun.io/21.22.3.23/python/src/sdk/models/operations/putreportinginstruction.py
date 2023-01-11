import dataclasses
from typing import Optional
from ..shared import reportinginstruction as shared_reportinginstruction
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutReportingInstructionPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    reporting_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReportingInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReportingInstructionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReportingInstructionRequest:
    headers: PutReportingInstructionHeaders = dataclasses.field()
    path_params: PutReportingInstructionPathParams = dataclasses.field()
    request: shared_reportinginstruction.ReportingInstruction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutReportingInstructionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    reporting_instruction: Optional[shared_reportinginstruction.ReportingInstruction] = dataclasses.field(default=None)
    
