package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowTransit")
    public Boolean allowTransit;
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors withAllowTransit(Boolean allowTransit) {
        this.allowTransit = allowTransit;
        return this;
    }
    @JsonProperty("ebgpHoldTimer")
    public Long ebgpHoldTimer;
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors withEbgpHoldTimer(Long ebgpHoldTimer) {
        this.ebgpHoldTimer = ebgpHoldTimer;
        return this;
    }
    @JsonProperty("ebgpMultihop")
    public Long ebgpMultihop;
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors withEbgpMultihop(Long ebgpMultihop) {
        this.ebgpMultihop = ebgpMultihop;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiveLimit")
    public Long receiveLimit;
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors withReceiveLimit(Long receiveLimit) {
        this.receiveLimit = receiveLimit;
        return this;
    }
    @JsonProperty("remoteAsNumber")
    public Long remoteAsNumber;
    public UpdateNetworkApplianceVpnBgpRequestBodyNeighbors withRemoteAsNumber(Long remoteAsNumber) {
        this.remoteAsNumber = remoteAsNumber;
        return this;
    }
}