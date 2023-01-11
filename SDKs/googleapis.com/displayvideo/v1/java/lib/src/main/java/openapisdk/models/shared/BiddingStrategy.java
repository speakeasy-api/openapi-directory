package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BiddingStrategy
 * Settings that control the bid strategy. Bid strategy determines the bid price.
**/
public class BiddingStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedBid")
    public FixedBidStrategy fixedBid;
    public BiddingStrategy withFixedBid(FixedBidStrategy fixedBid) {
        this.fixedBid = fixedBid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximizeSpendAutoBid")
    public MaximizeSpendBidStrategy maximizeSpendAutoBid;
    public BiddingStrategy withMaximizeSpendAutoBid(MaximizeSpendBidStrategy maximizeSpendAutoBid) {
        this.maximizeSpendAutoBid = maximizeSpendAutoBid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalAutoBid")
    public PerformanceGoalBidStrategy performanceGoalAutoBid;
    public BiddingStrategy withPerformanceGoalAutoBid(PerformanceGoalBidStrategy performanceGoalAutoBid) {
        this.performanceGoalAutoBid = performanceGoalAutoBid;
        return this;
    }
}