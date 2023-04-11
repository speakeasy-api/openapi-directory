import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimationResult } from "./costestimationresult";
/**
 * Response for EstimateCostScenarioForBillingAccount
 */
export declare class EstimateCostScenarioForBillingAccountResponse extends SpeakeasyBase {
    /**
     * The result of a estimating the costs of a `CostScenario`.
     */
    costEstimationResult?: CostEstimationResult;
}
