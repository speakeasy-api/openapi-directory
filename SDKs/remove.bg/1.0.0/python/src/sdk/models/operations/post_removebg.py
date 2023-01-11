import dataclasses
from typing import Optional
from ..shared import removebgjson as shared_removebgjson
from ..shared import removebgmultipart as shared_removebgmultipart
from ..shared import removebgjsonresponse as shared_removebgjsonresponse


@dataclasses.dataclass
class PostRemovebgRequests:
    remove_bg_json: Optional[shared_removebgjson.RemoveBgJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    remove_bg_json1: Optional[shared_removebgjson.RemoveBgJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    remove_bg_multipart: Optional[shared_removebgmultipart.RemoveBgMultipart] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostRemovebgRequest:
    request: PostRemovebgRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostRemovebgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    remove_bg_json_response: Optional[shared_removebgjsonresponse.RemoveBgJSONResponse] = dataclasses.field(default=None)
    post_removebg_200_image_wildcard_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
