package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest {
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
}