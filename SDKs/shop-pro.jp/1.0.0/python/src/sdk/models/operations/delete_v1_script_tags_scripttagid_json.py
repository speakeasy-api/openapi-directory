import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteV1ScriptTagsScriptTagIDJSONPathParams:
    script_tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteV1ScriptTagsScriptTagIDJSONSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteV1ScriptTagsScriptTagIDJSONRequest:
    path_params: DeleteV1ScriptTagsScriptTagIDJSONPathParams = dataclasses.field()
    security: DeleteV1ScriptTagsScriptTagIDJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteV1ScriptTagsScriptTagIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
