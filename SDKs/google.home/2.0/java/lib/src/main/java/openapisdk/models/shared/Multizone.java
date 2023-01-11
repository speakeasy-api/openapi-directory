package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Multizone {
    @JsonProperty("audio_output_delay")
    public Integer audioOutputDelay;
    public Multizone withAudioOutputDelay(Integer audioOutputDelay) {
        this.audioOutputDelay = audioOutputDelay;
        return this;
    }
    @JsonProperty("audio_output_delay_hdmi")
    public Integer audioOutputDelayHdmi;
    public Multizone withAudioOutputDelayHdmi(Integer audioOutputDelayHdmi) {
        this.audioOutputDelayHdmi = audioOutputDelayHdmi;
        return this;
    }
    @JsonProperty("audio_output_delay_oem")
    public Integer audioOutputDelayOem;
    public Multizone withAudioOutputDelayOem(Integer audioOutputDelayOem) {
        this.audioOutputDelayOem = audioOutputDelayOem;
        return this;
    }
    @JsonProperty("aux_in_group")
    public String auxInGroup;
    public Multizone withAuxInGroup(String auxInGroup) {
        this.auxInGroup = auxInGroup;
        return this;
    }
    @JsonProperty("dynamic_groups")
    public String[] dynamicGroups;
    public Multizone withDynamicGroups(String[] dynamicGroups) {
        this.dynamicGroups = dynamicGroups;
        return this;
    }
    @JsonProperty("groups")
    public String[] groups;
    public Multizone withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("multichannel_status")
    public Integer multichannelStatus;
    public Multizone withMultichannelStatus(Integer multichannelStatus) {
        this.multichannelStatus = multichannelStatus;
        return this;
    }
}