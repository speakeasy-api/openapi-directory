import { SpeakeasyBase } from "../../../internal/utils";
import { Commitment } from "./commitment";
import { ScenarioConfig } from "./scenarioconfig";
import { Workload } from "./workload";
/**
 * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
 */
export declare class CostScenario extends SpeakeasyBase {
    /**
     * New commitments to estimate the costs for. The cost of the commitments will be included in the estimate result and discounts the commitment entitles will be included in the workload cost estimates. A maximum of 100 workloads can be provided.
     */
    commitments?: Commitment[];
    /**
     * Configuration for a CostScenario. Specifies how costs are calculated.
     */
    scenarioConfig?: ScenarioConfig;
    /**
     * The Google Cloud usage whose costs are estimated. A maximum of 100 workloads can be provided.
     */
    workloads?: Workload[];
}
