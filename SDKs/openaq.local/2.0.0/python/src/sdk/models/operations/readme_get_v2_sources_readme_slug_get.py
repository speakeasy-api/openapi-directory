import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class ReadmeGetV2SourcesReadmeSlugGetPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReadmeGetV2SourcesReadmeSlugGetRequest:
    path_params: ReadmeGetV2SourcesReadmeSlugGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReadmeGetV2SourcesReadmeSlugGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    readme_get_v2_sources_readme_slug_get_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
