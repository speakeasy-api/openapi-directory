package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQuery200ApplicationJsonMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counter_server_query_cache_hit")
    public Double counterServerQueryCacheHit;
    public GetQuery200ApplicationJsonMetrics withCounterServerQueryCacheHit(Double counterServerQueryCacheHit) {
        this.counterServerQueryCacheHit = counterServerQueryCacheHit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_build_comprehension_index_ns")
    public Double timerQueryCompileStageBuildComprehensionIndexNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageBuildComprehensionIndexNs(Double timerQueryCompileStageBuildComprehensionIndexNs) {
        this.timerQueryCompileStageBuildComprehensionIndexNs = timerQueryCompileStageBuildComprehensionIndexNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_safety_ns")
    public Double timerQueryCompileStageCheckSafetyNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckSafetyNs(Double timerQueryCompileStageCheckSafetyNs) {
        this.timerQueryCompileStageCheckSafetyNs = timerQueryCompileStageCheckSafetyNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_types_ns")
    public Double timerQueryCompileStageCheckTypesNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckTypesNs(Double timerQueryCompileStageCheckTypesNs) {
        this.timerQueryCompileStageCheckTypesNs = timerQueryCompileStageCheckTypesNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_undefined_funcs_ns")
    public Double timerQueryCompileStageCheckUndefinedFuncsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckUndefinedFuncsNs(Double timerQueryCompileStageCheckUndefinedFuncsNs) {
        this.timerQueryCompileStageCheckUndefinedFuncsNs = timerQueryCompileStageCheckUndefinedFuncsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_unsafe_builtins_ns")
    public Double timerQueryCompileStageCheckUnsafeBuiltinsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckUnsafeBuiltinsNs(Double timerQueryCompileStageCheckUnsafeBuiltinsNs) {
        this.timerQueryCompileStageCheckUnsafeBuiltinsNs = timerQueryCompileStageCheckUnsafeBuiltinsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_resolve_refs_ns")
    public Double timerQueryCompileStageResolveRefsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageResolveRefsNs(Double timerQueryCompileStageResolveRefsNs) {
        this.timerQueryCompileStageResolveRefsNs = timerQueryCompileStageResolveRefsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_comprehension_terms_ns")
    public Double timerQueryCompileStageRewriteComprehensionTermsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteComprehensionTermsNs(Double timerQueryCompileStageRewriteComprehensionTermsNs) {
        this.timerQueryCompileStageRewriteComprehensionTermsNs = timerQueryCompileStageRewriteComprehensionTermsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_dynamic_terms_ns")
    public Double timerQueryCompileStageRewriteDynamicTermsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteDynamicTermsNs(Double timerQueryCompileStageRewriteDynamicTermsNs) {
        this.timerQueryCompileStageRewriteDynamicTermsNs = timerQueryCompileStageRewriteDynamicTermsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_expr_terms_ns")
    public Double timerQueryCompileStageRewriteExprTermsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteExprTermsNs(Double timerQueryCompileStageRewriteExprTermsNs) {
        this.timerQueryCompileStageRewriteExprTermsNs = timerQueryCompileStageRewriteExprTermsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_local_vars_ns")
    public Double timerQueryCompileStageRewriteLocalVarsNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteLocalVarsNs(Double timerQueryCompileStageRewriteLocalVarsNs) {
        this.timerQueryCompileStageRewriteLocalVarsNs = timerQueryCompileStageRewriteLocalVarsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_to_capture_value_ns")
    public Double timerQueryCompileStageRewriteToCaptureValueNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteToCaptureValueNs(Double timerQueryCompileStageRewriteToCaptureValueNs) {
        this.timerQueryCompileStageRewriteToCaptureValueNs = timerQueryCompileStageRewriteToCaptureValueNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_with_values_ns")
    public Double timerQueryCompileStageRewriteWithValuesNs;
    public GetQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteWithValuesNs(Double timerQueryCompileStageRewriteWithValuesNs) {
        this.timerQueryCompileStageRewriteWithValuesNs = timerQueryCompileStageRewriteWithValuesNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_input_parse_ns")
    public Double timerRegoInputParseNs;
    public GetQuery200ApplicationJsonMetrics withTimerRegoInputParseNs(Double timerRegoInputParseNs) {
        this.timerRegoInputParseNs = timerRegoInputParseNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_module_compile_ns")
    public Double timerRegoModuleCompileNs;
    public GetQuery200ApplicationJsonMetrics withTimerRegoModuleCompileNs(Double timerRegoModuleCompileNs) {
        this.timerRegoModuleCompileNs = timerRegoModuleCompileNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_module_parse_ns")
    public Double timerRegoModuleParseNs;
    public GetQuery200ApplicationJsonMetrics withTimerRegoModuleParseNs(Double timerRegoModuleParseNs) {
        this.timerRegoModuleParseNs = timerRegoModuleParseNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_query_compile_ns")
    public Double timerRegoQueryCompileNs;
    public GetQuery200ApplicationJsonMetrics withTimerRegoQueryCompileNs(Double timerRegoQueryCompileNs) {
        this.timerRegoQueryCompileNs = timerRegoQueryCompileNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_query_eval_ns")
    public Double timerRegoQueryEvalNs;
    public GetQuery200ApplicationJsonMetrics withTimerRegoQueryEvalNs(Double timerRegoQueryEvalNs) {
        this.timerRegoQueryEvalNs = timerRegoQueryEvalNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_query_parse_ns")
    public Double timerRegoQueryParseNs;
    public GetQuery200ApplicationJsonMetrics withTimerRegoQueryParseNs(Double timerRegoQueryParseNs) {
        this.timerRegoQueryParseNs = timerRegoQueryParseNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_server_handler_ns")
    public Double timerServerHandlerNs;
    public GetQuery200ApplicationJsonMetrics withTimerServerHandlerNs(Double timerServerHandlerNs) {
        this.timerServerHandlerNs = timerServerHandlerNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_server_read_bytes_ns")
    public Double timerServerReadBytesNs;
    public GetQuery200ApplicationJsonMetrics withTimerServerReadBytesNs(Double timerServerReadBytesNs) {
        this.timerServerReadBytesNs = timerServerReadBytesNs;
        return this;
    }
}