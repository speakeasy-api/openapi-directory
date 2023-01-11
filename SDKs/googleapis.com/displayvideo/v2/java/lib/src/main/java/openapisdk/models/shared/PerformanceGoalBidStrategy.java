package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerformanceGoalBidStrategy
 * A strategy that automatically adjusts the bid to meet or beat a specified performance goal.
**/
public class PerformanceGoalBidStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public PerformanceGoalBidStrategy withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAverageCpmBidAmountMicros")
    public String maxAverageCpmBidAmountMicros;
    public PerformanceGoalBidStrategy withMaxAverageCpmBidAmountMicros(String maxAverageCpmBidAmountMicros) {
        this.maxAverageCpmBidAmountMicros = maxAverageCpmBidAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalAmountMicros")
    public String performanceGoalAmountMicros;
    public PerformanceGoalBidStrategy withPerformanceGoalAmountMicros(String performanceGoalAmountMicros) {
        this.performanceGoalAmountMicros = performanceGoalAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalType")
    public PerformanceGoalBidStrategyPerformanceGoalTypeEnum performanceGoalType;
    public PerformanceGoalBidStrategy withPerformanceGoalType(PerformanceGoalBidStrategyPerformanceGoalTypeEnum performanceGoalType) {
        this.performanceGoalType = performanceGoalType;
        return this;
    }
}