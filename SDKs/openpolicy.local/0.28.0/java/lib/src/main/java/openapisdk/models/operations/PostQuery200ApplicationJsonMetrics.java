package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuery200ApplicationJsonMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counter_server_query_cache_hit")
    public Double counterServerQueryCacheHit;
    public PostQuery200ApplicationJsonMetrics withCounterServerQueryCacheHit(Double counterServerQueryCacheHit) {
        this.counterServerQueryCacheHit = counterServerQueryCacheHit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_build_comprehension_index_ns")
    public Double timerQueryCompileStageBuildComprehensionIndexNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageBuildComprehensionIndexNs(Double timerQueryCompileStageBuildComprehensionIndexNs) {
        this.timerQueryCompileStageBuildComprehensionIndexNs = timerQueryCompileStageBuildComprehensionIndexNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_safety_ns")
    public Double timerQueryCompileStageCheckSafetyNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckSafetyNs(Double timerQueryCompileStageCheckSafetyNs) {
        this.timerQueryCompileStageCheckSafetyNs = timerQueryCompileStageCheckSafetyNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_types_ns")
    public Double timerQueryCompileStageCheckTypesNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckTypesNs(Double timerQueryCompileStageCheckTypesNs) {
        this.timerQueryCompileStageCheckTypesNs = timerQueryCompileStageCheckTypesNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_undefined_funcs_ns")
    public Double timerQueryCompileStageCheckUndefinedFuncsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckUndefinedFuncsNs(Double timerQueryCompileStageCheckUndefinedFuncsNs) {
        this.timerQueryCompileStageCheckUndefinedFuncsNs = timerQueryCompileStageCheckUndefinedFuncsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_check_unsafe_builtins_ns")
    public Double timerQueryCompileStageCheckUnsafeBuiltinsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageCheckUnsafeBuiltinsNs(Double timerQueryCompileStageCheckUnsafeBuiltinsNs) {
        this.timerQueryCompileStageCheckUnsafeBuiltinsNs = timerQueryCompileStageCheckUnsafeBuiltinsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_resolve_refs_ns")
    public Double timerQueryCompileStageResolveRefsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageResolveRefsNs(Double timerQueryCompileStageResolveRefsNs) {
        this.timerQueryCompileStageResolveRefsNs = timerQueryCompileStageResolveRefsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_comprehension_terms_ns")
    public Double timerQueryCompileStageRewriteComprehensionTermsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteComprehensionTermsNs(Double timerQueryCompileStageRewriteComprehensionTermsNs) {
        this.timerQueryCompileStageRewriteComprehensionTermsNs = timerQueryCompileStageRewriteComprehensionTermsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_dynamic_terms_ns")
    public Double timerQueryCompileStageRewriteDynamicTermsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteDynamicTermsNs(Double timerQueryCompileStageRewriteDynamicTermsNs) {
        this.timerQueryCompileStageRewriteDynamicTermsNs = timerQueryCompileStageRewriteDynamicTermsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_expr_terms_ns")
    public Double timerQueryCompileStageRewriteExprTermsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteExprTermsNs(Double timerQueryCompileStageRewriteExprTermsNs) {
        this.timerQueryCompileStageRewriteExprTermsNs = timerQueryCompileStageRewriteExprTermsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_local_vars_ns")
    public Double timerQueryCompileStageRewriteLocalVarsNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteLocalVarsNs(Double timerQueryCompileStageRewriteLocalVarsNs) {
        this.timerQueryCompileStageRewriteLocalVarsNs = timerQueryCompileStageRewriteLocalVarsNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_to_capture_value_ns")
    public Double timerQueryCompileStageRewriteToCaptureValueNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteToCaptureValueNs(Double timerQueryCompileStageRewriteToCaptureValueNs) {
        this.timerQueryCompileStageRewriteToCaptureValueNs = timerQueryCompileStageRewriteToCaptureValueNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_query_compile_stage_rewrite_with_values_ns")
    public Double timerQueryCompileStageRewriteWithValuesNs;
    public PostQuery200ApplicationJsonMetrics withTimerQueryCompileStageRewriteWithValuesNs(Double timerQueryCompileStageRewriteWithValuesNs) {
        this.timerQueryCompileStageRewriteWithValuesNs = timerQueryCompileStageRewriteWithValuesNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_input_parse_ns")
    public Double timerRegoInputParseNs;
    public PostQuery200ApplicationJsonMetrics withTimerRegoInputParseNs(Double timerRegoInputParseNs) {
        this.timerRegoInputParseNs = timerRegoInputParseNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_module_compile_ns")
    public Double timerRegoModuleCompileNs;
    public PostQuery200ApplicationJsonMetrics withTimerRegoModuleCompileNs(Double timerRegoModuleCompileNs) {
        this.timerRegoModuleCompileNs = timerRegoModuleCompileNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_module_parse_ns")
    public Double timerRegoModuleParseNs;
    public PostQuery200ApplicationJsonMetrics withTimerRegoModuleParseNs(Double timerRegoModuleParseNs) {
        this.timerRegoModuleParseNs = timerRegoModuleParseNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_query_compile_ns")
    public Double timerRegoQueryCompileNs;
    public PostQuery200ApplicationJsonMetrics withTimerRegoQueryCompileNs(Double timerRegoQueryCompileNs) {
        this.timerRegoQueryCompileNs = timerRegoQueryCompileNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_query_eval_ns")
    public Double timerRegoQueryEvalNs;
    public PostQuery200ApplicationJsonMetrics withTimerRegoQueryEvalNs(Double timerRegoQueryEvalNs) {
        this.timerRegoQueryEvalNs = timerRegoQueryEvalNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_rego_query_parse_ns")
    public Double timerRegoQueryParseNs;
    public PostQuery200ApplicationJsonMetrics withTimerRegoQueryParseNs(Double timerRegoQueryParseNs) {
        this.timerRegoQueryParseNs = timerRegoQueryParseNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_server_handler_ns")
    public Double timerServerHandlerNs;
    public PostQuery200ApplicationJsonMetrics withTimerServerHandlerNs(Double timerServerHandlerNs) {
        this.timerServerHandlerNs = timerServerHandlerNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timer_server_read_bytes_ns")
    public Double timerServerReadBytesNs;
    public PostQuery200ApplicationJsonMetrics withTimerServerReadBytesNs(Double timerServerReadBytesNs) {
        this.timerServerReadBytesNs = timerServerReadBytesNs;
        return this;
    }
}