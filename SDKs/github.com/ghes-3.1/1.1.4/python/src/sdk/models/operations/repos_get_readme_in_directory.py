import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import content_file as shared_content_file
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposGetReadmeInDirectoryPathParams:
    dir: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dir', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetReadmeInDirectoryQueryParams:
    ref: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposGetReadmeInDirectoryRequest:
    path_params: ReposGetReadmeInDirectoryPathParams = dataclasses.field()
    query_params: ReposGetReadmeInDirectoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetReadmeInDirectoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    content_file: Optional[shared_content_file.ContentFile] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
