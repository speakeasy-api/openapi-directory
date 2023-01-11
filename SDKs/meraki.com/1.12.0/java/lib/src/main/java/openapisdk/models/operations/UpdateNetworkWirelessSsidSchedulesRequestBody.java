package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidSchedulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidSchedulesRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranges")
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[] ranges;
    public UpdateNetworkWirelessSsidSchedulesRequestBody withRanges(UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[] ranges) {
        this.ranges = ranges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rangesInSeconds")
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[] rangesInSeconds;
    public UpdateNetworkWirelessSsidSchedulesRequestBody withRangesInSeconds(UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[] rangesInSeconds) {
        this.rangesInSeconds = rangesInSeconds;
        return this;
    }
}