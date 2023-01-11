import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import package as shared_package


@dataclasses.dataclass
class PackageLanguagePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    language: str = dataclasses.field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageLanguageQueryParams:
    async_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageLanguageRequest:
    path_params: PackageLanguagePathParams = dataclasses.field()
    query_params: PackageLanguageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageLanguageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    package: Optional[shared_package.Package] = dataclasses.field(default=None)
    package_language_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
