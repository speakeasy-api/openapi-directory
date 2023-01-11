package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryBatchResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCount")
    public Long failureCount;
    public QueryBatchResponse2 withFailureCount(Long failureCount) {
        this.failureCount = failureCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public FailedSubmission2[] failures;
    public QueryBatchResponse2 withFailures(FailedSubmission2[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingCount")
    public Long pendingCount;
    public QueryBatchResponse2 withPendingCount(Long pendingCount) {
        this.pendingCount = pendingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public QueryBatchResponse2StatusEnum status;
    public QueryBatchResponse2 withStatus(QueryBatchResponse2StatusEnum status) {
        this.status = status;
        return this;
    }
}