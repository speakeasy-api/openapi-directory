import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentCostEstimate } from "./segmentcostestimate";
import { Sku } from "./sku";
/**
 * The result of a estimating the costs of a `CostScenario`.
 */
export declare class CostEstimationResult extends SpeakeasyBase {
    /**
     * Required. The ISO 4217 currency code for the cost estimate.
     */
    currencyCode?: string;
    /**
     * Required. Estimated costs for each idealized month of a `CostScenario`.
     */
    segmentCostEstimates?: SegmentCostEstimate[];
    /**
     * Required. Information about SKUs used in the estimate.
     */
    skus?: Sku[];
}
