import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import journalinstruction as shared_journalinstruction


@dataclasses.dataclass
class GetJournalInstructionTemplatePathParams:
    journal_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalInstructionTemplateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalInstructionTemplateRequest:
    headers: GetJournalInstructionTemplateHeaders = dataclasses.field()
    path_params: GetJournalInstructionTemplatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJournalInstructionTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    journal_instruction: Optional[shared_journalinstruction.JournalInstruction] = dataclasses.field(default=None)
    
