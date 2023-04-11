import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
/**
 * Estimated cost for usage on a SKU.
 */
export declare class SkuCostEstimate extends SpeakeasyBase {
    /**
     * An estimated cost.
     */
    costEstimate?: CostEstimate;
    /**
     * The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" More information about the SKU can be found in the `skus` field of the `CostEstimationResult`.
     */
    sku?: string;
    /**
     * The amount of usage on this SKU.
     */
    usageAmount?: number;
    /**
     * The unit for the usage on this SKU.
     */
    usageUnit?: string;
}
