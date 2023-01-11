package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullRequest
 * Request for the Pull method.
**/
public class PullRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnImmediately")
    public Boolean returnImmediately;
    public PullRequest withReturnImmediately(Boolean returnImmediately) {
        this.returnImmediately = returnImmediately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public PullRequest withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}