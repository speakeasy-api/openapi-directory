package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaximizeSpendBidStrategy
 * A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.
**/
public class MaximizeSpendBidStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public MaximizeSpendBidStrategy withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAverageCpmBidAmountMicros")
    public String maxAverageCpmBidAmountMicros;
    public MaximizeSpendBidStrategy withMaxAverageCpmBidAmountMicros(String maxAverageCpmBidAmountMicros) {
        this.maxAverageCpmBidAmountMicros = maxAverageCpmBidAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalType")
    public MaximizeSpendBidStrategyPerformanceGoalTypeEnum performanceGoalType;
    public MaximizeSpendBidStrategy withPerformanceGoalType(MaximizeSpendBidStrategyPerformanceGoalTypeEnum performanceGoalType) {
        this.performanceGoalType = performanceGoalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raiseBidForDeals")
    public Boolean raiseBidForDeals;
    public MaximizeSpendBidStrategy withRaiseBidForDeals(Boolean raiseBidForDeals) {
        this.raiseBidForDeals = raiseBidForDeals;
        return this;
    }
}