import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimationResult } from "./costestimationresult";
/**
 * Response for EstimateCostScenarioWithListPrice
 */
export declare class EstimateCostScenarioWithListPriceResponse extends SpeakeasyBase {
    /**
     * The result of a estimating the costs of a `CostScenario`.
     */
    costEstimationResult?: CostEstimationResult;
}
