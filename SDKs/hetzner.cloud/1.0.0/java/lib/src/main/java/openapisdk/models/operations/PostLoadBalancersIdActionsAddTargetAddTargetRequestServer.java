package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsAddTargetAddTargetRequestServer
 * Configuration for type Server, required if type is `server`
**/
public class PostLoadBalancersIdActionsAddTargetAddTargetRequestServer {
    @JsonProperty("id")
    public Double id;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequestServer withId(Double id) {
        this.id = id;
        return this;
    }
}