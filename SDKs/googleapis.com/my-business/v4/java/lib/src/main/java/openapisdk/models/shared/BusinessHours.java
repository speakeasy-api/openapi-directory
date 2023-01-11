package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessHours
 * Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
**/
public class BusinessHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periods")
    public TimePeriod[] periods;
    public BusinessHours withPeriods(TimePeriod[] periods) {
        this.periods = periods;
        return this;
    }
}