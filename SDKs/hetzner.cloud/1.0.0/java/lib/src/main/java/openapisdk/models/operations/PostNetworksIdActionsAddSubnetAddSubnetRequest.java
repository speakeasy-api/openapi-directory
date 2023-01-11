package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostNetworksIdActionsAddSubnetAddSubnetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworksIdActionsAddSubnetAddSubnetRequest withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostNetworksIdActionsAddSubnetAddSubnetRequest withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonProperty("type")
    public PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum type;
    public PostNetworksIdActionsAddSubnetAddSubnetRequest withType(PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vswitch_id")
    public Long vswitchId;
    public PostNetworksIdActionsAddSubnetAddSubnetRequest withVswitchId(Long vswitchId) {
        this.vswitchId = vswitchId;
        return this;
    }
}