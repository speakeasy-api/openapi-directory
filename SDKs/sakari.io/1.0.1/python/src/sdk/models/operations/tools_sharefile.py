import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import sharefileresponse as shared_sharefileresponse


@dataclasses.dataclass
class ToolsShareFileMultipartFormDataMedia:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    media: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'media' }})
    

@dataclasses.dataclass
class ToolsShareFileMultipartFormData:
    media: Optional[ToolsShareFileMultipartFormDataMedia] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ToolsShareFileRequests:
    application_octet_stream: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    object: Optional[ToolsShareFileMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ToolsShareFileSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ToolsShareFileRequest:
    request: ToolsShareFileRequests = dataclasses.field()
    security: ToolsShareFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ToolsShareFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    share_file_response: Optional[shared_sharefileresponse.ShareFileResponse] = dataclasses.field(default=None)
    
