package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventPeriodRange
 * An event period time range.
**/
public class EventPeriodRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventPeriodRange withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodEndMillis")
    public String periodEndMillis;
    public EventPeriodRange withPeriodEndMillis(String periodEndMillis) {
        this.periodEndMillis = periodEndMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodStartMillis")
    public String periodStartMillis;
    public EventPeriodRange withPeriodStartMillis(String periodStartMillis) {
        this.periodStartMillis = periodStartMillis;
        return this;
    }
}