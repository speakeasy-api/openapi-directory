package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TopDirectionSources
 * Top regions where driving-direction requests originated from.
**/
public class TopDirectionSources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayCount")
    public Integer dayCount;
    public TopDirectionSources withDayCount(Integer dayCount) {
        this.dayCount = dayCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCounts")
    public RegionCount[] regionCounts;
    public TopDirectionSources withRegionCounts(RegionCount[] regionCounts) {
        this.regionCounts = regionCounts;
        return this;
    }
}