import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class PackagePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageQueryParams:
    async_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageRequest:
    path_params: PackagePathParams = dataclasses.field()
    query_params: PackageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    package_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
