import dataclasses
from typing import Any,Optional
from ..shared import matrixrequest as shared_matrixrequest
from ..shared import symmetricalmatrixrequest as shared_symmetricalmatrixrequest
from ..shared import gherror as shared_gherror
from ..shared import matrixresponse as shared_matrixresponse


@dataclasses.dataclass
class PostMatrixRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostMatrixResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    matrix_response: Optional[shared_matrixresponse.MatrixResponse] = dataclasses.field(default=None)
    
