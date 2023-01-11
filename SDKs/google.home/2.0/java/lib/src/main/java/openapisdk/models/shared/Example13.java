package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example13 {
    @JsonProperty("can_enroll")
    public Boolean canEnroll;
    public Example13 withCanEnroll(Boolean canEnroll) {
        this.canEnroll = canEnroll;
        return this;
    }
    @JsonProperty("enrollment_state")
    public Integer enrollmentState;
    public Example13 withEnrollmentState(Integer enrollmentState) {
        this.enrollmentState = enrollmentState;
        return this;
    }
    @JsonProperty("error_code")
    public Integer errorCode;
    public Example13 withErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("ready")
    public Boolean ready;
    public Example13 withReady(Boolean ready) {
        this.ready = ready;
        return this;
    }
    @JsonProperty("retryable")
    public Boolean retryable;
    public Example13 withRetryable(Boolean retryable) {
        this.retryable = retryable;
        return this;
    }
}