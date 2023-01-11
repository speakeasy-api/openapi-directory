import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import four_hundred as shared_four_hundred


@dataclasses.dataclass
class GetDocumentPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocumentQueryParams:
    explain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'explain', 'style': 'form', 'explode': True }})
    input: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    instrument: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'instrument', 'style': 'form', 'explode': True }})
    metrics: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    provenance: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'provenance', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONExplanationLocalsKey:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONExplanationLocalsValue:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONExplanationLocals:
    key: Optional[GetDocument200ApplicationJSONExplanationLocalsKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[GetDocument200ApplicationJSONExplanationLocalsValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONExplanationNodeTerms:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONExplanationNode:
    r"""GetDocument200ApplicationJSONExplanationNode
    The AST element associated with the evaluation step.
    https://godoc.org/github.com/open-policy-agent/opa/ast - AST
    """
    
    index: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    terms: Optional[list[GetDocument200ApplicationJSONExplanationNodeTerms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
class GetDocument200ApplicationJSONExplanationOpEnum(str, Enum):
    ENTER = "enter"
    EXIT = "exit"
    EVAL = "eval"
    FAIL = "fail"
    REDO = "redo"

class GetDocument200ApplicationJSONExplanationTypeEnum(str, Enum):
    EXPR = "expr"
    RULE = "rule"
    BODY = "body"


@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONExplanation:
    locals: Optional[list[GetDocument200ApplicationJSONExplanationLocals]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locals') }})
    node: Optional[GetDocument200ApplicationJSONExplanationNode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    op: Optional[GetDocument200ApplicationJSONExplanationOpEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    parent_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    query_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_id') }})
    type: Optional[GetDocument200ApplicationJSONExplanationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONMetrics:
    counter_server_query_cache_hit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counter_server_query_cache_hit') }})
    timer_query_compile_stage_build_comprehension_index_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_build_comprehension_index_ns') }})
    timer_query_compile_stage_check_safety_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_safety_ns') }})
    timer_query_compile_stage_check_types_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_types_ns') }})
    timer_query_compile_stage_check_undefined_funcs_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_undefined_funcs_ns') }})
    timer_query_compile_stage_check_unsafe_builtins_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_unsafe_builtins_ns') }})
    timer_query_compile_stage_resolve_refs_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_resolve_refs_ns') }})
    timer_query_compile_stage_rewrite_comprehension_terms_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_comprehension_terms_ns') }})
    timer_query_compile_stage_rewrite_dynamic_terms_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_dynamic_terms_ns') }})
    timer_query_compile_stage_rewrite_expr_terms_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_expr_terms_ns') }})
    timer_query_compile_stage_rewrite_local_vars_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_local_vars_ns') }})
    timer_query_compile_stage_rewrite_to_capture_value_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_to_capture_value_ns') }})
    timer_query_compile_stage_rewrite_with_values_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_with_values_ns') }})
    timer_rego_input_parse_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_input_parse_ns') }})
    timer_rego_module_compile_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_module_compile_ns') }})
    timer_rego_module_parse_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_module_parse_ns') }})
    timer_rego_query_compile_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_query_compile_ns') }})
    timer_rego_query_eval_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_query_eval_ns') }})
    timer_rego_query_parse_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_query_parse_ns') }})
    timer_server_handler_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_server_handler_ns') }})
    timer_server_read_bytes_ns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_server_read_bytes_ns') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSONProvenance:
    build_commit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_commit') }})
    build_hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_hostname') }})
    build_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_timestamp') }})
    bundles: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDocument200ApplicationJSON:
    explanation: Optional[list[GetDocument200ApplicationJSONExplanation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    metrics: Optional[GetDocument200ApplicationJSONMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    provenance: Optional[GetDocument200ApplicationJSONProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    result: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetDocumentRequest:
    path_params: GetDocumentPathParams = dataclasses.field()
    query_params: GetDocumentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    get_document_200_application_json_object: Optional[GetDocument200ApplicationJSON] = dataclasses.field(default=None)
    
