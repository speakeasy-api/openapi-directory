package operations

import (
	"openapi/pkg/models/shared"
)

type PostCompileQueryParams struct {
	Explain    *string `queryParam:"style=form,explode=true,name=explain"`
	Instrument *bool   `queryParam:"style=form,explode=true,name=instrument"`
	Metrics    *bool   `queryParam:"style=form,explode=true,name=metrics"`
	Pretty     *bool   `queryParam:"style=form,explode=true,name=pretty"`
}

type PostCompile200ApplicationJSONMetrics struct {
	CounterServerQueryCacheHit                        *float64 `json:"counter_server_query_cache_hit,omitempty"`
	TimerQueryCompileStageBuildComprehensionIndexNs   *float64 `json:"timer_query_compile_stage_build_comprehension_index_ns,omitempty"`
	TimerQueryCompileStageCheckSafetyNs               *float64 `json:"timer_query_compile_stage_check_safety_ns,omitempty"`
	TimerQueryCompileStageCheckTypesNs                *float64 `json:"timer_query_compile_stage_check_types_ns,omitempty"`
	TimerQueryCompileStageCheckUndefinedFuncsNs       *float64 `json:"timer_query_compile_stage_check_undefined_funcs_ns,omitempty"`
	TimerQueryCompileStageCheckUnsafeBuiltinsNs       *float64 `json:"timer_query_compile_stage_check_unsafe_builtins_ns,omitempty"`
	TimerQueryCompileStageResolveRefsNs               *float64 `json:"timer_query_compile_stage_resolve_refs_ns,omitempty"`
	TimerQueryCompileStageRewriteComprehensionTermsNs *float64 `json:"timer_query_compile_stage_rewrite_comprehension_terms_ns,omitempty"`
	TimerQueryCompileStageRewriteDynamicTermsNs       *float64 `json:"timer_query_compile_stage_rewrite_dynamic_terms_ns,omitempty"`
	TimerQueryCompileStageRewriteExprTermsNs          *float64 `json:"timer_query_compile_stage_rewrite_expr_terms_ns,omitempty"`
	TimerQueryCompileStageRewriteLocalVarsNs          *float64 `json:"timer_query_compile_stage_rewrite_local_vars_ns,omitempty"`
	TimerQueryCompileStageRewriteToCaptureValueNs     *float64 `json:"timer_query_compile_stage_rewrite_to_capture_value_ns,omitempty"`
	TimerQueryCompileStageRewriteWithValuesNs         *float64 `json:"timer_query_compile_stage_rewrite_with_values_ns,omitempty"`
	TimerRegoInputParseNs                             *float64 `json:"timer_rego_input_parse_ns,omitempty"`
	TimerRegoModuleCompileNs                          *float64 `json:"timer_rego_module_compile_ns,omitempty"`
	TimerRegoModuleParseNs                            *float64 `json:"timer_rego_module_parse_ns,omitempty"`
	TimerRegoQueryCompileNs                           *float64 `json:"timer_rego_query_compile_ns,omitempty"`
	TimerRegoQueryEvalNs                              *float64 `json:"timer_rego_query_eval_ns,omitempty"`
	TimerRegoQueryParseNs                             *float64 `json:"timer_rego_query_parse_ns,omitempty"`
	TimerServerHandlerNs                              *float64 `json:"timer_server_handler_ns,omitempty"`
	TimerServerReadBytesNs                            *float64 `json:"timer_server_read_bytes_ns,omitempty"`
}

type PostCompile200ApplicationJSON struct {
	Metrics *PostCompile200ApplicationJSONMetrics `json:"metrics,omitempty"`
}

type PostCompileRequest struct {
	QueryParams PostCompileQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type PostCompileResponse struct {
	FourHundred                         *shared.FourHundred
	ContentType                         string
	StatusCode                          int64
	PostCompile200ApplicationJSONObject *PostCompile200ApplicationJSON
}
