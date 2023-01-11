import dataclasses
from typing import Optional
from ..shared import cislinetype as shared_cislinetype
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetCisLineTypeFromEmployerPathParams:
    cis_line_type_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisLineTypeFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisLineTypeFromEmployerRequest:
    headers: GetCisLineTypeFromEmployerHeaders = dataclasses.field()
    path_params: GetCisLineTypeFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCisLineTypeFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cis_line_type: Optional[shared_cislinetype.CisLineType] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
