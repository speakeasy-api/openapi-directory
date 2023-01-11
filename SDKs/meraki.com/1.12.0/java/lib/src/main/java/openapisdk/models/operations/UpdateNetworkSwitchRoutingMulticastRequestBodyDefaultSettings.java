package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
**/
public class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodUnknownMulticastTrafficEnabled")
    public Boolean floodUnknownMulticastTrafficEnabled;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings withFloodUnknownMulticastTrafficEnabled(Boolean floodUnknownMulticastTrafficEnabled) {
        this.floodUnknownMulticastTrafficEnabled = floodUnknownMulticastTrafficEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("igmpSnoopingEnabled")
    public Boolean igmpSnoopingEnabled;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings withIgmpSnoopingEnabled(Boolean igmpSnoopingEnabled) {
        this.igmpSnoopingEnabled = igmpSnoopingEnabled;
        return this;
    }
}