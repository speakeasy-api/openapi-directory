package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PageviewsCounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public PageviewsCounts withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public PageviewsCountsTimeRangeEnum timeRange;
    public PageviewsCounts withTimeRange(PageviewsCountsTimeRangeEnum timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}