package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesFailoverRequest
 * Instance failover request.
**/
public class InstancesFailoverRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failoverContext")
    public FailoverContext failoverContext;
    public InstancesFailoverRequest withFailoverContext(FailoverContext failoverContext) {
        this.failoverContext = failoverContext;
        return this;
    }
}