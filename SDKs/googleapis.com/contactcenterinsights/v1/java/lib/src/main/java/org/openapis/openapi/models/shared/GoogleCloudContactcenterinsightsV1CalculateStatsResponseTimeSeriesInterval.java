/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval - A single interval in a time series.
 */
public class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval {
    /**
     * The number of conversations created in this interval.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationCount")
    public Integer conversationCount;

    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval withConversationCount(Integer conversationCount) {
        this.conversationCount = conversationCount;
        return this;
    }
    
    /**
     * The start time of this interval.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;

    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval(){}
}
