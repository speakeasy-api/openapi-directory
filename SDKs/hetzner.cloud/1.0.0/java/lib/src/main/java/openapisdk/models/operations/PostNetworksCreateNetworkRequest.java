package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostNetworksCreateNetworkRequest {
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworksCreateNetworkRequest withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public PostNetworksCreateNetworkRequestLabels labels;
    public PostNetworksCreateNetworkRequest withLabels(PostNetworksCreateNetworkRequestLabels labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostNetworksCreateNetworkRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public PostNetworksCreateNetworkRequestRoutes[] routes;
    public PostNetworksCreateNetworkRequest withRoutes(PostNetworksCreateNetworkRequestRoutes[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public PostNetworksCreateNetworkRequestSubnets[] subnets;
    public PostNetworksCreateNetworkRequest withSubnets(PostNetworksCreateNetworkRequestSubnets[] subnets) {
        this.subnets = subnets;
        return this;
    }
}