package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer
 * Configuration for type Server, required if type is `server`
**/
public class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer {
    @JsonProperty("id")
    public Double id;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer withId(Double id) {
        this.id = id;
        return this;
    }
}