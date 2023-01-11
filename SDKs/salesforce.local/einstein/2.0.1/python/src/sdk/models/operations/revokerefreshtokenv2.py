import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RevokeRefreshTokenV2PathParams:
    token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RevokeRefreshTokenV2Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RevokeRefreshTokenV2Request:
    path_params: RevokeRefreshTokenV2PathParams = dataclasses.field()
    security: RevokeRefreshTokenV2Security = dataclasses.field()
    

@dataclasses.dataclass
class RevokeRefreshTokenV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
