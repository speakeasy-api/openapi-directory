package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicy
 * IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
**/
public class IamPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public Policy policy;
    public IamPolicy withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public IamPolicy withStatus(Status status) {
        this.status = status;
        return this;
    }
}