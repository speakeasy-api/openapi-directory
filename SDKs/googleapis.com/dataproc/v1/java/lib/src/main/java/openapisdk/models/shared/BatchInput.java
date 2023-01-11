package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchInput
 * A representation of a batch workload in the service.
**/
public class BatchInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentConfig")
    public EnvironmentConfig environmentConfig;
    public BatchInput withEnvironmentConfig(EnvironmentConfig environmentConfig) {
        this.environmentConfig = environmentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public BatchInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pysparkBatch")
    public PySparkBatch pysparkBatch;
    public BatchInput withPysparkBatch(PySparkBatch pysparkBatch) {
        this.pysparkBatch = pysparkBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeConfig")
    public RuntimeConfig runtimeConfig;
    public BatchInput withRuntimeConfig(RuntimeConfig runtimeConfig) {
        this.runtimeConfig = runtimeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeInfo")
    public RuntimeInfoInput runtimeInfo;
    public BatchInput withRuntimeInfo(RuntimeInfoInput runtimeInfo) {
        this.runtimeInfo = runtimeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkBatch")
    public SparkBatch sparkBatch;
    public BatchInput withSparkBatch(SparkBatch sparkBatch) {
        this.sparkBatch = sparkBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkRBatch")
    public SparkRBatch sparkRBatch;
    public BatchInput withSparkRBatch(SparkRBatch sparkRBatch) {
        this.sparkRBatch = sparkRBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkSqlBatch")
    public SparkSqlBatch sparkSqlBatch;
    public BatchInput withSparkSqlBatch(SparkSqlBatch sparkSqlBatch) {
        this.sparkSqlBatch = sparkSqlBatch;
        return this;
    }
}