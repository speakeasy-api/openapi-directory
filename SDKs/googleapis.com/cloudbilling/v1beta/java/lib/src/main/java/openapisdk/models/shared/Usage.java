package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Usage
 * An amount of usage over a time frame.
**/
public class Usage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageRateTimeline")
    public UsageRateTimeline usageRateTimeline;
    public Usage withUsageRateTimeline(UsageRateTimeline usageRateTimeline) {
        this.usageRateTimeline = usageRateTimeline;
        return this;
    }
}