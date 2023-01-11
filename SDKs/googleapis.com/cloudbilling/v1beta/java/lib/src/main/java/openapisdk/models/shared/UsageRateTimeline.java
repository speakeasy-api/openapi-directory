package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageRateTimeline
 * A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours.
**/
public class UsageRateTimeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public UsageRateTimeline withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageRateTimelineEntries")
    public UsageRateTimelineEntry[] usageRateTimelineEntries;
    public UsageRateTimeline withUsageRateTimelineEntries(UsageRateTimelineEntry[] usageRateTimelineEntries) {
        this.usageRateTimelineEntries = usageRateTimelineEntries;
        return this;
    }
}