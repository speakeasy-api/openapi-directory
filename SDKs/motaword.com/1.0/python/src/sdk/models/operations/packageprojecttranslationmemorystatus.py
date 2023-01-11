import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class PackageProjectTranslationMemoryStatusPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryStatusQueryParams:
    async_request_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'async_request_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryStatusRequest:
    path_params: PackageProjectTranslationMemoryStatusPathParams = dataclasses.field()
    query_params: PackageProjectTranslationMemoryStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    
