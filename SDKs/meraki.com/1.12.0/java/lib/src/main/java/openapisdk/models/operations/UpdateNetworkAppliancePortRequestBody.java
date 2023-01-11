package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkAppliancePortRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicy")
    public String accessPolicy;
    public UpdateNetworkAppliancePortRequestBody withAccessPolicy(String accessPolicy) {
        this.accessPolicy = accessPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedVlans")
    public String allowedVlans;
    public UpdateNetworkAppliancePortRequestBody withAllowedVlans(String allowedVlans) {
        this.allowedVlans = allowedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dropUntaggedTraffic")
    public Boolean dropUntaggedTraffic;
    public UpdateNetworkAppliancePortRequestBody withDropUntaggedTraffic(Boolean dropUntaggedTraffic) {
        this.dropUntaggedTraffic = dropUntaggedTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkAppliancePortRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateNetworkAppliancePortRequestBody withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateNetworkAppliancePortRequestBody withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}