import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeletePensionRevisionByNumberPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    revision_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePensionRevisionByNumberHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePensionRevisionByNumberRequest:
    headers: DeletePensionRevisionByNumberHeaders = dataclasses.field()
    path_params: DeletePensionRevisionByNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePensionRevisionByNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
