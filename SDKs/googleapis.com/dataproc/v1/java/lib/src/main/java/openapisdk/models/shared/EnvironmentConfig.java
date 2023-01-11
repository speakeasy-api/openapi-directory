package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentConfig
 * Environment configuration for a workload.
**/
public class EnvironmentConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionConfig")
    public ExecutionConfig executionConfig;
    public EnvironmentConfig withExecutionConfig(ExecutionConfig executionConfig) {
        this.executionConfig = executionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peripheralsConfig")
    public PeripheralsConfig peripheralsConfig;
    public EnvironmentConfig withPeripheralsConfig(PeripheralsConfig peripheralsConfig) {
        this.peripheralsConfig = peripheralsConfig;
        return this;
    }
}