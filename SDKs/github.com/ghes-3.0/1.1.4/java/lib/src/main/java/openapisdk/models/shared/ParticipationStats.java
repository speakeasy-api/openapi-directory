package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ParticipationStats {
    @JsonProperty("all")
    public Long[] all;
    public ParticipationStats withAll(Long[] all) {
        this.all = all;
        return this;
    }
    @JsonProperty("owner")
    public Long[] owner;
    public ParticipationStats withOwner(Long[] owner) {
        this.owner = owner;
        return this;
    }
}