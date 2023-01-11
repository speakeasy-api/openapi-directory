package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancers201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostLoadBalancers201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}