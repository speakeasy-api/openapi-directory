import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguagePathParams:
    language_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'languageCode', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageQueryParams:
    async_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageRequest:
    path_params: PackageProjectTranslationMemoryForLanguagePathParams = dataclasses.field()
    query_params: PackageProjectTranslationMemoryForLanguageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryForLanguageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    package_project_translation_memory_for_language_200_application_xml_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
