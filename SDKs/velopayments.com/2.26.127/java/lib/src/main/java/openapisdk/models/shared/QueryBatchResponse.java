package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCount")
    public Long failureCount;
    public QueryBatchResponse withFailureCount(Long failureCount) {
        this.failureCount = failureCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public FailedSubmission[] failures;
    public QueryBatchResponse withFailures(FailedSubmission[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingCount")
    public Long pendingCount;
    public QueryBatchResponse withPendingCount(Long pendingCount) {
        this.pendingCount = pendingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public QueryBatchResponseStatusEnum status;
    public QueryBatchResponse withStatus(QueryBatchResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}