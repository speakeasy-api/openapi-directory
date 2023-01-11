import dataclasses
from typing import Optional
from ..shared import subcontractor as shared_subcontractor
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutSubContractorIntoEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSubContractorIntoEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSubContractorIntoEmployerRequest:
    headers: PutSubContractorIntoEmployerHeaders = dataclasses.field()
    path_params: PutSubContractorIntoEmployerPathParams = dataclasses.field()
    request: shared_subcontractor.SubContractor = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSubContractorIntoEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    sub_contractor: Optional[shared_subcontractor.SubContractor] = dataclasses.field(default=None)
    
