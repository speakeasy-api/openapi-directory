import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum


@dataclasses.dataclass
class GetAPIVVersionMetalsBenchmarkSupportedPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIVVersionMetalsBenchmarkSupportedQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIVVersionMetalsBenchmarkSupportedRequest:
    path_params: GetAPIVVersionMetalsBenchmarkSupportedPathParams = dataclasses.field()
    query_params: GetAPIVVersionMetalsBenchmarkSupportedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIVVersionMetalsBenchmarkSupportedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    problem_details: Optional[dict[str, Any]] = dataclasses.field(default=None)
    get_api_v_version_metals_benchmark_supported_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
