import { SpeakeasyBase } from "../../../internal/utils";
import { FixedBidStrategy } from "./fixedbidstrategy";
import { MaximizeSpendBidStrategy } from "./maximizespendbidstrategy";
import { PerformanceGoalBidStrategy } from "./performancegoalbidstrategy";
/**
 * Settings that control the bid strategy. Bid strategy determines the bid price.
 */
export declare class BiddingStrategy extends SpeakeasyBase {
    /**
     * A strategy that uses a fixed bidding price.
     */
    fixedBid?: FixedBidStrategy;
    /**
     * A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.
     */
    maximizeSpendAutoBid?: MaximizeSpendBidStrategy;
    /**
     * A strategy that automatically adjusts the bid to meet or beat a specified performance goal.
     */
    performanceGoalAutoBid?: PerformanceGoalBidStrategy;
}
