package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesLockRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lock_reason")
    public IssuesLockRequestBodyLockReasonEnum lockReason;
    public IssuesLockRequestBody withLockReason(IssuesLockRequestBodyLockReasonEnum lockReason) {
        this.lockReason = lockReason;
        return this;
    }
}