package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchMtuRequestBodyOverrides {
    @JsonProperty("mtuSize")
    public Long mtuSize;
    public UpdateNetworkSwitchMtuRequestBodyOverrides withMtuSize(Long mtuSize) {
        this.mtuSize = mtuSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchProfiles")
    public String[] switchProfiles;
    public UpdateNetworkSwitchMtuRequestBodyOverrides withSwitchProfiles(String[] switchProfiles) {
        this.switchProfiles = switchProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switches")
    public String[] switches;
    public UpdateNetworkSwitchMtuRequestBodyOverrides withSwitches(String[] switches) {
        this.switches = switches;
        return this;
    }
}