import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import popularlanguagepairs as shared_popularlanguagepairs


@dataclasses.dataclass
class GetUserPopularPairsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserPopularPairsSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserPopularPairsRequest:
    path_params: GetUserPopularPairsPathParams = dataclasses.field()
    security: GetUserPopularPairsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserPopularPairsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    popular_language_pairs: Optional[shared_popularlanguagepairs.PopularLanguagePairs] = dataclasses.field(default=None)
    
