package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizationAttemptInfo
 * State of the latest attempt to authorize a domain for certificate issuance.
**/
public class AuthorizationAttemptInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public AuthorizationAttemptInfo withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public AuthorizationAttemptInfo withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public AuthorizationAttemptInfoFailureReasonEnum failureReason;
    public AuthorizationAttemptInfo withFailureReason(AuthorizationAttemptInfoFailureReasonEnum failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AuthorizationAttemptInfoStateEnum state;
    public AuthorizationAttemptInfo withState(AuthorizationAttemptInfoStateEnum state) {
        this.state = state;
        return this;
    }
}