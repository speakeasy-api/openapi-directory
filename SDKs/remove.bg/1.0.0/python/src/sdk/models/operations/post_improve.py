import dataclasses
from typing import Optional
from ..shared import improvementprogramjson as shared_improvementprogramjson
from ..shared import improvementprogrammultipart as shared_improvementprogrammultipart


@dataclasses.dataclass
class PostImproveRequests:
    improvement_program_json: Optional[shared_improvementprogramjson.ImprovementProgramJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    improvement_program_json1: Optional[shared_improvementprogramjson.ImprovementProgramJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    improvement_program_multipart: Optional[shared_improvementprogrammultipart.ImprovementProgramMultipart] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostImproveRequest:
    request: PostImproveRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostImproveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
