package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PairwithSpeakerRequest {
    @JsonProperty("connect")
    public Boolean connect;
    public PairwithSpeakerRequest withConnect(Boolean connect) {
        this.connect = connect;
        return this;
    }
    @JsonProperty("mac_address")
    public String macAddress;
    public PairwithSpeakerRequest withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonProperty("profile")
    public Integer profile;
    public PairwithSpeakerRequest withProfile(Integer profile) {
        this.profile = profile;
        return this;
    }
}