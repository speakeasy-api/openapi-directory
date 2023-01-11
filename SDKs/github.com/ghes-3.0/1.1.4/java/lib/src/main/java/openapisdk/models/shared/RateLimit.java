package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RateLimit {
    @JsonProperty("limit")
    public Long limit;
    public RateLimit withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("remaining")
    public Long remaining;
    public RateLimit withRemaining(Long remaining) {
        this.remaining = remaining;
        return this;
    }
    @JsonProperty("reset")
    public Long reset;
    public RateLimit withReset(Long reset) {
        this.reset = reset;
        return this;
    }
}