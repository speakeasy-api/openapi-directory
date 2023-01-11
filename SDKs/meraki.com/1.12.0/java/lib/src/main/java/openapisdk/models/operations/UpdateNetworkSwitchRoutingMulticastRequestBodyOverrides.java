package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides {
    @JsonProperty("floodUnknownMulticastTrafficEnabled")
    public Boolean floodUnknownMulticastTrafficEnabled;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides withFloodUnknownMulticastTrafficEnabled(Boolean floodUnknownMulticastTrafficEnabled) {
        this.floodUnknownMulticastTrafficEnabled = floodUnknownMulticastTrafficEnabled;
        return this;
    }
    @JsonProperty("igmpSnoopingEnabled")
    public Boolean igmpSnoopingEnabled;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides withIgmpSnoopingEnabled(Boolean igmpSnoopingEnabled) {
        this.igmpSnoopingEnabled = igmpSnoopingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stacks")
    public String[] stacks;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides withStacks(String[] stacks) {
        this.stacks = stacks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchProfiles")
    public String[] switchProfiles;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides withSwitchProfiles(String[] switchProfiles) {
        this.switchProfiles = switchProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switches")
    public String[] switches;
    public UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides withSwitches(String[] switches) {
        this.switches = switches;
        return this;
    }
}