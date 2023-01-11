package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelativeDateRange
 * A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30
**/
public class RelativeDateRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationDays")
    public Integer durationDays;
    public RelativeDateRange withDurationDays(Integer durationDays) {
        this.durationDays = durationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetDays")
    public Integer offsetDays;
    public RelativeDateRange withOffsetDays(Integer offsetDays) {
        this.offsetDays = offsetDays;
        return this;
    }
}