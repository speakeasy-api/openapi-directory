import dataclasses
from typing import Optional
from ..shared import four_hundred as shared_four_hundred
from ..shared import four_hundred_and_four as shared_four_hundred_and_four


@dataclasses.dataclass
class PutDocumentPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDocumentHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDocumentRequest:
    headers: PutDocumentHeaders = dataclasses.field()
    path_params: PutDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    four_hundred_and_four: Optional[shared_four_hundred_and_four.FourHundredAndFour] = dataclasses.field(default=None)
    
