package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval
 * A single interval in a time series.
**/
public class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationCount")
    public Integer conversationCount;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval withConversationCount(Integer conversationCount) {
        this.conversationCount = conversationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}