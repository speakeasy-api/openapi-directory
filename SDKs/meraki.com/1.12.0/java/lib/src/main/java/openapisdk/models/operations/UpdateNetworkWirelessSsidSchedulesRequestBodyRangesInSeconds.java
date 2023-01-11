package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds {
    @JsonProperty("end")
    public Long end;
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public Long start;
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds withStart(Long start) {
        this.start = start;
        return this;
    }
}