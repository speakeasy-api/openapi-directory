package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeAlgorithmRequestBody {
    @JsonProperty("type")
    public PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum type;
    public PostLoadBalancersIdActionsChangeAlgorithmRequestBody withType(PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}