import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteInlineScriptTagPathParams:
    inline_script_tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'inlineScriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteInlineScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteInlineScriptTagRequest:
    path_params: DeleteInlineScriptTagPathParams = dataclasses.field()
    security: DeleteInlineScriptTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteInlineScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
