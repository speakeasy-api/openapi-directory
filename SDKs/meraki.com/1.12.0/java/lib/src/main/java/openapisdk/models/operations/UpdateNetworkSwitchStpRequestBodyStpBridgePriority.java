package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStpRequestBodyStpBridgePriority {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stacks")
    public String[] stacks;
    public UpdateNetworkSwitchStpRequestBodyStpBridgePriority withStacks(String[] stacks) {
        this.stacks = stacks;
        return this;
    }
    @JsonProperty("stpPriority")
    public Long stpPriority;
    public UpdateNetworkSwitchStpRequestBodyStpBridgePriority withStpPriority(Long stpPriority) {
        this.stpPriority = stpPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchProfiles")
    public String[] switchProfiles;
    public UpdateNetworkSwitchStpRequestBodyStpBridgePriority withSwitchProfiles(String[] switchProfiles) {
        this.switchProfiles = switchProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switches")
    public String[] switches;
    public UpdateNetworkSwitchStpRequestBodyStpBridgePriority withSwitches(String[] switches) {
        this.switches = switches;
        return this;
    }
}