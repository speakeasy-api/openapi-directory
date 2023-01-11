package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetingValueDayPartTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayParts")
    public TargetingValueDayPartTargetingDayPart[] dayParts;
    public TargetingValueDayPartTargeting withDayParts(TargetingValueDayPartTargetingDayPart[] dayParts) {
        this.dayParts = dayParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZoneType")
    public String timeZoneType;
    public TargetingValueDayPartTargeting withTimeZoneType(String timeZoneType) {
        this.timeZoneType = timeZoneType;
        return this;
    }
}