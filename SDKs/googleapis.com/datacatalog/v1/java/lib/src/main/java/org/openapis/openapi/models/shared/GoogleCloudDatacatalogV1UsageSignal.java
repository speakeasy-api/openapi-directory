/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDatacatalogV1UsageSignal - The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
 */
public class GoogleCloudDatacatalogV1UsageSignal {
    /**
     * Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonUsageWithinTimeRange")
    public java.util.Map<String, GoogleCloudDatacatalogV1CommonUsageStats> commonUsageWithinTimeRange;

    public GoogleCloudDatacatalogV1UsageSignal withCommonUsageWithinTimeRange(java.util.Map<String, GoogleCloudDatacatalogV1CommonUsageStats> commonUsageWithinTimeRange) {
        this.commonUsageWithinTimeRange = commonUsageWithinTimeRange;
        return this;
    }
    
    /**
     * Favorite count in the source system.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoriteCount")
    public String favoriteCount;

    public GoogleCloudDatacatalogV1UsageSignal withFavoriteCount(String favoriteCount) {
        this.favoriteCount = favoriteCount;
        return this;
    }
    
    /**
     * The end timestamp of the duration of usage statistics.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;

    public GoogleCloudDatacatalogV1UsageSignal withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    /**
     * Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageWithinTimeRange")
    public java.util.Map<String, GoogleCloudDatacatalogV1UsageStats> usageWithinTimeRange;

    public GoogleCloudDatacatalogV1UsageSignal withUsageWithinTimeRange(java.util.Map<String, GoogleCloudDatacatalogV1UsageStats> usageWithinTimeRange) {
        this.usageWithinTimeRange = usageWithinTimeRange;
        return this;
    }
    
    public GoogleCloudDatacatalogV1UsageSignal(){}
}
