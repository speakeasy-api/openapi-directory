import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteJournalInstructionTemplatePathParams:
    journal_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteJournalInstructionTemplateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteJournalInstructionTemplateRequest:
    headers: DeleteJournalInstructionTemplateHeaders = dataclasses.field()
    path_params: DeleteJournalInstructionTemplatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteJournalInstructionTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
