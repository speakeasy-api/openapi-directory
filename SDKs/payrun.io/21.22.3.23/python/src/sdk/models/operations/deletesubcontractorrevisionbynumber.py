import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteSubContractorRevisionByNumberPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSubContractorRevisionByNumberHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSubContractorRevisionByNumberRequest:
    headers: DeleteSubContractorRevisionByNumberHeaders = dataclasses.field()
    path_params: DeleteSubContractorRevisionByNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSubContractorRevisionByNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
