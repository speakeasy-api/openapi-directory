import dataclasses
from typing import Optional
from ..shared import patchesschema as shared_patchesschema
from ..shared import four_hundred as shared_four_hundred
from ..shared import four_hundred_and_four as shared_four_hundred_and_four


@dataclasses.dataclass
class PatchDocumentPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchDocumentRequest:
    path_params: PatchDocumentPathParams = dataclasses.field()
    request: list[shared_patchesschema.PatchesSchema] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    four_hundred_and_four: Optional[shared_four_hundred_and_four.FourHundredAndFour] = dataclasses.field(default=None)
    
