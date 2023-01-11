package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransitTableTransitTimeRowTransitTimeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTransitTimeInDays")
    public Long maxTransitTimeInDays;
    public TransitTableTransitTimeRowTransitTimeValue withMaxTransitTimeInDays(Long maxTransitTimeInDays) {
        this.maxTransitTimeInDays = maxTransitTimeInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minTransitTimeInDays")
    public Long minTransitTimeInDays;
    public TransitTableTransitTimeRowTransitTimeValue withMinTransitTimeInDays(Long minTransitTimeInDays) {
        this.minTransitTimeInDays = minTransitTimeInDays;
        return this;
    }
}