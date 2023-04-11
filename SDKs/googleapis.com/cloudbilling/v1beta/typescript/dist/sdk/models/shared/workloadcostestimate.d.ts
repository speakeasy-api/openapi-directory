import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
import { SkuCostEstimate } from "./skucostestimate";
/**
 * Estimated cost for a workload.
 */
export declare class WorkloadCostEstimate extends SpeakeasyBase {
    /**
     * The name of the workload, as specified in the `CostScenario`.
     */
    name?: string;
    /**
     * Estimated costs for each SKU in the workload.
     */
    skuCostEstimates?: SkuCostEstimate[];
    /**
     * An estimated cost.
     */
    workloadTotalCostEstimate?: CostEstimate;
}
