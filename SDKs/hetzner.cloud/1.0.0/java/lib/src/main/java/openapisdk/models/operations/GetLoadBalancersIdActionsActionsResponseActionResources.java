package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdActionsActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancersIdActionsActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetLoadBalancersIdActionsActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}