package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Audio {
    @JsonProperty("digital")
    public Boolean digital;
    public Audio withDigital(Boolean digital) {
        this.digital = digital;
        return this;
    }
}