import dataclasses
from typing import Optional
from ..shared import cisline as shared_cisline
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetCisLineFromSubContractorPathParams:
    cis_line_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisLineId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisLineFromSubContractorHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisLineFromSubContractorRequest:
    headers: GetCisLineFromSubContractorHeaders = dataclasses.field()
    path_params: GetCisLineFromSubContractorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCisLineFromSubContractorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cis_line: Optional[shared_cisline.CisLine] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
