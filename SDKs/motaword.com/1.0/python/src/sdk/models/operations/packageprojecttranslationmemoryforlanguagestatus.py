import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageStatusPathParams:
    language_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'languageCode', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageStatusQueryParams:
    async_request_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'async_request_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageStatusRequest:
    path_params: PackageProjectTranslationMemoryForLanguageStatusPathParams = dataclasses.field()
    query_params: PackageProjectTranslationMemoryForLanguageStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    
