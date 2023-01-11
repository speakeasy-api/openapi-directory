import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class CompilePathParams:
    template_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'template-token', 'style': 'simple', 'explode': False }})
    
class CompileLatexCompilerEnum(str, Enum):
    PDFLATEX = "pdflatex"
    LUALATEX = "lualatex"


@dataclasses.dataclass
class CompileQueryParams:
    doc_file_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doc-file-name', 'style': 'form', 'explode': True }})
    doc_url_expires_in: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doc-url-expires-in', 'style': 'form', 'explode': True }})
    latex_compiler: Optional[CompileLatexCompilerEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latex-compiler', 'style': 'form', 'explode': True }})
    latex_runs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latex-runs ', 'style': 'form', 'explode': True }})
    main_file_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'main-file-name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompileHeaders:
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompileRequest:
    headers: CompileHeaders = dataclasses.field()
    path_params: CompilePathParams = dataclasses.field()
    query_params: CompileQueryParams = dataclasses.field()
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CompileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    compile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
