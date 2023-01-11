package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDeleteServiceRequestBody {
    @JsonProperty("listen_port")
    public Double listenPort;
    public PostLoadBalancersIdActionsDeleteServiceRequestBody withListenPort(Double listenPort) {
        this.listenPort = listenPort;
        return this;
    }
}