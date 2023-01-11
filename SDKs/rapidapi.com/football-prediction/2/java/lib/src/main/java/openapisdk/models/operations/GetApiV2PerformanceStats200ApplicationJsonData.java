package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiV2PerformanceStats200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accuracy")
    public GetApiV2PerformanceStats200ApplicationJsonDataAccuracy accuracy;
    public GetApiV2PerformanceStats200ApplicationJsonData withAccuracy(GetApiV2PerformanceStats200ApplicationJsonDataAccuracy accuracy) {
        this.accuracy = accuracy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public GetApiV2PerformanceStats200ApplicationJsonDataDetails details;
    public GetApiV2PerformanceStats200ApplicationJsonData withDetails(GetApiV2PerformanceStats200ApplicationJsonDataDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("market")
    public String market;
    public GetApiV2PerformanceStats200ApplicationJsonData withMarket(String market) {
        this.market = market;
        return this;
    }
}