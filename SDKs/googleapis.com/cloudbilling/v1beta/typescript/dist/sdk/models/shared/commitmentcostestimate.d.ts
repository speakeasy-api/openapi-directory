import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
import { SkuCostEstimate } from "./skucostestimate";
/**
 * Estimated cost for a commitment.
 */
export declare class CommitmentCostEstimate extends SpeakeasyBase {
    /**
     * An estimated cost.
     */
    commitmentTotalCostEstimate?: CostEstimate;
    /**
     * The name of the commitment, as specified in the `CostScenario`.
     */
    name?: string;
    /**
     * Estimated costs for each SKU in the commitment.
     */
    skuCostEstimates?: SkuCostEstimate[];
}
