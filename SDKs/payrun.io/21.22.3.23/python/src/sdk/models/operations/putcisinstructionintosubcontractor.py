import dataclasses
from typing import Optional
from ..shared import cisinstruction as shared_cisinstruction
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutCisInstructionIntoSubContractorPathParams:
    cis_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisInstructionId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCisInstructionIntoSubContractorHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCisInstructionIntoSubContractorRequest:
    headers: PutCisInstructionIntoSubContractorHeaders = dataclasses.field()
    path_params: PutCisInstructionIntoSubContractorPathParams = dataclasses.field()
    request: shared_cisinstruction.CisInstruction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCisInstructionIntoSubContractorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cis_instruction: Optional[shared_cisinstruction.CisInstruction] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
