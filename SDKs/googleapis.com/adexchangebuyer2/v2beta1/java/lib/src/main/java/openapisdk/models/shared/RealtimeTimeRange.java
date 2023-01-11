package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RealtimeTimeRange
 * An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.
**/
public class RealtimeTimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimestamp")
    public String startTimestamp;
    public RealtimeTimeRange withStartTimestamp(String startTimestamp) {
        this.startTimestamp = startTimestamp;
        return this;
    }
}