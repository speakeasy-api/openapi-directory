package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FailedSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedSubmission")
    public FailedPayee failedSubmission;
    public FailedSubmission withFailedSubmission(FailedPayee failedSubmission) {
        this.failedSubmission = failedSubmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMessage")
    public String failureMessage;
    public FailedSubmission withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}