package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Batch
 * A representation of a batch workload in the service.
**/
public class Batch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Batch withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public Batch withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentConfig")
    public EnvironmentConfig environmentConfig;
    public Batch withEnvironmentConfig(EnvironmentConfig environmentConfig) {
        this.environmentConfig = environmentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Batch withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Batch withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public Batch withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pysparkBatch")
    public PySparkBatch pysparkBatch;
    public Batch withPysparkBatch(PySparkBatch pysparkBatch) {
        this.pysparkBatch = pysparkBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeConfig")
    public RuntimeConfig runtimeConfig;
    public Batch withRuntimeConfig(RuntimeConfig runtimeConfig) {
        this.runtimeConfig = runtimeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeInfo")
    public RuntimeInfo runtimeInfo;
    public Batch withRuntimeInfo(RuntimeInfo runtimeInfo) {
        this.runtimeInfo = runtimeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkBatch")
    public SparkBatch sparkBatch;
    public Batch withSparkBatch(SparkBatch sparkBatch) {
        this.sparkBatch = sparkBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkRBatch")
    public SparkRBatch sparkRBatch;
    public Batch withSparkRBatch(SparkRBatch sparkRBatch) {
        this.sparkRBatch = sparkRBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkSqlBatch")
    public SparkSqlBatch sparkSqlBatch;
    public Batch withSparkSqlBatch(SparkSqlBatch sparkSqlBatch) {
        this.sparkSqlBatch = sparkSqlBatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BatchStateEnum state;
    public Batch withState(BatchStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateHistory")
    public StateHistory[] stateHistory;
    public Batch withStateHistory(StateHistory[] stateHistory) {
        this.stateHistory = stateHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public Batch withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTime")
    public String stateTime;
    public Batch withStateTime(String stateTime) {
        this.stateTime = stateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public Batch withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}