package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public Timestamp completionTime;
    public Environment withCompletionTime(Timestamp completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Timestamp creationTime;
    public Environment withCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionValue")
    public EnvironmentDimensionValueEntry[] dimensionValue;
    public Environment withDimensionValue(EnvironmentDimensionValueEntry[] dimensionValue) {
        this.dimensionValue = dimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Environment withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentId")
    public String environmentId;
    public Environment withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentResult")
    public MergedResult environmentResult;
    public Environment withEnvironmentResult(MergedResult environmentResult) {
        this.environmentResult = environmentResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public Environment withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historyId")
    public String historyId;
    public Environment withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Environment withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultsStorage")
    public ResultsStorage resultsStorage;
    public Environment withResultsStorage(ResultsStorage resultsStorage) {
        this.resultsStorage = resultsStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardSummaries")
    public ShardSummary[] shardSummaries;
    public Environment withShardSummaries(ShardSummary[] shardSummaries) {
        this.shardSummaries = shardSummaries;
        return this;
    }
}