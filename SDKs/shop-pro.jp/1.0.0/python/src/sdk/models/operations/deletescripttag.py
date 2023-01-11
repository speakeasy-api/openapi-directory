import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteScriptTagPathParams:
    script_tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteScriptTagRequest:
    path_params: DeleteScriptTagPathParams = dataclasses.field()
    security: DeleteScriptTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
