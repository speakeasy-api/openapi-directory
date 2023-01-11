import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class PackageUserTranslationMemoryForLanguageStatusPathParams:
    language_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'languageCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageUserTranslationMemoryForLanguageStatusQueryParams:
    async_request_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'async_request_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageUserTranslationMemoryForLanguageStatusRequest:
    path_params: PackageUserTranslationMemoryForLanguageStatusPathParams = dataclasses.field()
    query_params: PackageUserTranslationMemoryForLanguageStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageUserTranslationMemoryForLanguageStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    
