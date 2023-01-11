import dataclasses
from typing import Optional
from ..shared import cislinetype as shared_cislinetype
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutCisLineTypeIntoEmployerPathParams:
    cis_line_type_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCisLineTypeIntoEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCisLineTypeIntoEmployerRequest:
    headers: PutCisLineTypeIntoEmployerHeaders = dataclasses.field()
    path_params: PutCisLineTypeIntoEmployerPathParams = dataclasses.field()
    request: shared_cislinetype.CisLineType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCisLineTypeIntoEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cis_line_type: Optional[shared_cislinetype.CisLineType] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
