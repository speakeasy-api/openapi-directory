import dataclasses
from typing import Optional
from ..shared import nominalcode as shared_nominalcode
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutNominalCodePathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutNominalCodeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutNominalCodeRequest:
    headers: PutNominalCodeHeaders = dataclasses.field()
    path_params: PutNominalCodePathParams = dataclasses.field()
    request: shared_nominalcode.NominalCode = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutNominalCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    nominal_code: Optional[shared_nominalcode.NominalCode] = dataclasses.field(default=None)
    
