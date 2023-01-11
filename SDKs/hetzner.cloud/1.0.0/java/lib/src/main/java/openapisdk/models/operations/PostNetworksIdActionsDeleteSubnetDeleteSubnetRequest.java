package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest {
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
}