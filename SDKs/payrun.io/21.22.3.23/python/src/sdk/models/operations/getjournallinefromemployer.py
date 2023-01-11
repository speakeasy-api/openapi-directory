import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import journalline as shared_journalline


@dataclasses.dataclass
class GetJournalLineFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_line_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JournalLineId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalLineFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalLineFromEmployerRequest:
    headers: GetJournalLineFromEmployerHeaders = dataclasses.field()
    path_params: GetJournalLineFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJournalLineFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    journal_line: Optional[shared_journalline.JournalLine] = dataclasses.field(default=None)
    
