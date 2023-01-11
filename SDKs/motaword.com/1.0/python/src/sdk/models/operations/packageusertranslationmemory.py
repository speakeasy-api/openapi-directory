import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class PackageUserTranslationMemoryPathParams:
    language_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'languageCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageUserTranslationMemoryQueryParams:
    async_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    email: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageUserTranslationMemoryRequest:
    path_params: PackageUserTranslationMemoryPathParams = dataclasses.field()
    query_params: PackageUserTranslationMemoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageUserTranslationMemoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    package_user_translation_memory_200_application_xml_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
