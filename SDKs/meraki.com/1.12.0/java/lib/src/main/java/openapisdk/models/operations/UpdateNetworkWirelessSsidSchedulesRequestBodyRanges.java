package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges {
    @JsonProperty("endDay")
    public String endDay;
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRanges withEndDay(String endDay) {
        this.endDay = endDay;
        return this;
    }
    @JsonProperty("endTime")
    public String endTime;
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRanges withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("startDay")
    public String startDay;
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRanges withStartDay(String startDay) {
        this.startDay = startDay;
        return this;
    }
    @JsonProperty("startTime")
    public String startTime;
    public UpdateNetworkWirelessSsidSchedulesRequestBodyRanges withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}