import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import nominalcode as shared_nominalcode


@dataclasses.dataclass
class GetNominalCodeFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNominalCodeFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNominalCodeFromEmployerRequest:
    headers: GetNominalCodeFromEmployerHeaders = dataclasses.field()
    path_params: GetNominalCodeFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNominalCodeFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    nominal_code: Optional[shared_nominalcode.NominalCode] = dataclasses.field(default=None)
    
