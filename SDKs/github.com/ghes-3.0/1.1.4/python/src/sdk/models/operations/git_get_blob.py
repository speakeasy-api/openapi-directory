import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import blob as shared_blob
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GitGetBlobPathParams:
    file_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'file_sha', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitGetBlobRequest:
    path_params: GitGetBlobPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GitGetBlobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    blob: Optional[shared_blob.Blob] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
