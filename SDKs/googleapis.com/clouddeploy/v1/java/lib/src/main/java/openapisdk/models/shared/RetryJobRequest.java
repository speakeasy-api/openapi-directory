package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetryJobRequest
 * RetryJobRequest is the request object used by `RetryJob`.
**/
public class RetryJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public RetryJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phaseId")
    public String phaseId;
    public RetryJobRequest withPhaseId(String phaseId) {
        this.phaseId = phaseId;
        return this;
    }
}