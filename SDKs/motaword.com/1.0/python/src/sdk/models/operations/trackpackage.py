import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import packagestatus as shared_packagestatus


@dataclasses.dataclass
class TrackPackagePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrackPackageQueryParams:
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TrackPackageRequest:
    path_params: TrackPackagePathParams = dataclasses.field()
    query_params: TrackPackageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TrackPackageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    package_status: Optional[shared_packagestatus.PackageStatus] = dataclasses.field(default=None)
    
