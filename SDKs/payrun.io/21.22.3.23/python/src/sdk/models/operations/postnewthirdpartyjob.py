import dataclasses
from typing import Optional
from ..shared import thirdpartyjobinstruction as shared_thirdpartyjobinstruction
from ..shared import errormodel as shared_errormodel
from ..shared import link as shared_link


@dataclasses.dataclass
class PostNewThirdPartyJobHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostNewThirdPartyJobRequest:
    headers: PostNewThirdPartyJobHeaders = dataclasses.field()
    request: shared_thirdpartyjobinstruction.ThirdPartyJobInstruction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostNewThirdPartyJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link: Optional[shared_link.Link] = dataclasses.field(default=None)
    
