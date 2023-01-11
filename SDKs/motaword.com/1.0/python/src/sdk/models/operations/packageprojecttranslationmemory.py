import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class PackageProjectTranslationMemoryPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryQueryParams:
    async_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryRequest:
    path_params: PackageProjectTranslationMemoryPathParams = dataclasses.field()
    query_params: PackageProjectTranslationMemoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackageProjectTranslationMemoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    package_project_translation_memory_200_application_xml_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
