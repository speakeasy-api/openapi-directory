package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FailedSubmission2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedSubmission")
    public FailedPayee2 failedSubmission;
    public FailedSubmission2 withFailedSubmission(FailedPayee2 failedSubmission) {
        this.failedSubmission = failedSubmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMessage")
    public String failureMessage;
    public FailedSubmission2 withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}