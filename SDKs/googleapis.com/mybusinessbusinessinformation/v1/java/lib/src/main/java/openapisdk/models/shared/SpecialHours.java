package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpecialHours
 * Represents a set of time periods when a location's operational hours differ from its normal business hours.
**/
public class SpecialHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialHourPeriods")
    public SpecialHourPeriod[] specialHourPeriods;
    public SpecialHours withSpecialHourPeriods(SpecialHourPeriod[] specialHourPeriods) {
        this.specialHourPeriods = specialHourPeriods;
        return this;
    }
}