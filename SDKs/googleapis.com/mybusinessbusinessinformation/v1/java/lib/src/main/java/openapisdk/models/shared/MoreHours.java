package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoreHours
 * The time periods during which a location is open for certain types of business.
**/
public class MoreHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursTypeId")
    public String hoursTypeId;
    public MoreHours withHoursTypeId(String hoursTypeId) {
        this.hoursTypeId = hoursTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periods")
    public TimePeriod[] periods;
    public MoreHours withPeriods(TimePeriod[] periods) {
        this.periods = periods;
        return this;
    }
}