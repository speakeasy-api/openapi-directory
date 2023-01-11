package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostNetworksCreateNetworkRequestSubnets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworksCreateNetworkRequestSubnets withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostNetworksCreateNetworkRequestSubnets withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonProperty("type")
    public PostNetworksCreateNetworkRequestSubnetsTypeEnum type;
    public PostNetworksCreateNetworkRequestSubnets withType(PostNetworksCreateNetworkRequestSubnetsTypeEnum type) {
        this.type = type;
        return this;
    }
}