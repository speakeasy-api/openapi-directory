package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiV2PerformanceStats200ApplicationJsonDataDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_14_days")
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days last14Days;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetails withLast14Days(GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days last14Days) {
        this.last14Days = last14Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_30_days")
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days last30Days;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetails withLast30Days(GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days last30Days) {
        this.last30Days = last30Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_7_days")
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days last7Days;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetails withLast7Days(GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days last7Days) {
        this.last7Days = last7Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yesterday")
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday yesterday;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetails withYesterday(GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday yesterday) {
        this.yesterday = yesterday;
        return this;
    }
}