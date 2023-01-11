package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVpnBgpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asNumber")
    public Long asNumber;
    public UpdateNetworkApplianceVpnBgpRequestBody withAsNumber(Long asNumber) {
        this.asNumber = asNumber;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkApplianceVpnBgpRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ibgpHoldTimer")
    public Long ibgpHoldTimer;
    public UpdateNetworkApplianceVpnBgpRequestBody withIbgpHoldTimer(Long ibgpHoldTimer) {
        this.ibgpHoldTimer = ibgpHoldTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("neighbors")
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[] neighbors;
    public UpdateNetworkApplianceVpnBgpRequestBody withNeighbors(UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[] neighbors) {
        this.neighbors = neighbors;
        return this;
    }
}