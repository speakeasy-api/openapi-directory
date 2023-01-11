import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class UploadProfilePictureRequestBodyProfilePicture:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    profile_picture: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'profile_picture' }})
    

@dataclasses.dataclass
class UploadProfilePictureRequestBody:
    profile_picture: UploadProfilePictureRequestBodyProfilePicture = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UploadProfilePictureRequest:
    request: Optional[UploadProfilePictureRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadProfilePictureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
