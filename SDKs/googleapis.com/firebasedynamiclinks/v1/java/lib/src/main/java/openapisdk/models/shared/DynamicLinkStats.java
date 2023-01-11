package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicLinkStats
 * Analytics stats of a Dynamic Link for a given timeframe.
**/
public class DynamicLinkStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkEventStats")
    public DynamicLinkEventStat[] linkEventStats;
    public DynamicLinkStats withLinkEventStats(DynamicLinkEventStat[] linkEventStats) {
        this.linkEventStats = linkEventStats;
        return this;
    }
}