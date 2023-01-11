package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VoteCount {
    @JsonProperty("option")
    public String option;
    public VoteCount withOption(String option) {
        this.option = option;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public VoteCount withValue(Long value) {
        this.value = value;
        return this;
    }
}