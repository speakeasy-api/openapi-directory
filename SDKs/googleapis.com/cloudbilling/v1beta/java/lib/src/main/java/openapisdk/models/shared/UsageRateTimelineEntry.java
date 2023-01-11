package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageRateTimelineEntry
 * A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
**/
public class UsageRateTimelineEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveTime")
    public EstimationTimePoint effectiveTime;
    public UsageRateTimelineEntry withEffectiveTime(EstimationTimePoint effectiveTime) {
        this.effectiveTime = effectiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageRate")
    public Double usageRate;
    public UsageRateTimelineEntry withUsageRate(Double usageRate) {
        this.usageRate = usageRate;
        return this;
    }
}