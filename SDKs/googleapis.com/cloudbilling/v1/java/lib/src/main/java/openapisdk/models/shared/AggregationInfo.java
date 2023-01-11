package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregationInfo
 * Represents the aggregation level and interval for pricing of a single SKU.
**/
public class AggregationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationCount")
    public Integer aggregationCount;
    public AggregationInfo withAggregationCount(Integer aggregationCount) {
        this.aggregationCount = aggregationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationInterval")
    public AggregationInfoAggregationIntervalEnum aggregationInterval;
    public AggregationInfo withAggregationInterval(AggregationInfoAggregationIntervalEnum aggregationInterval) {
        this.aggregationInterval = aggregationInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationLevel")
    public AggregationInfoAggregationLevelEnum aggregationLevel;
    public AggregationInfo withAggregationLevel(AggregationInfoAggregationLevelEnum aggregationLevel) {
        this.aggregationLevel = aggregationLevel;
        return this;
    }
}