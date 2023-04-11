import { SpeakeasyBase } from "../../../internal/utils";
import { CommitmentCostEstimate } from "./commitmentcostestimate";
import { CostEstimate } from "./costestimate";
import { EstimationTimePoint } from "./estimationtimepoint";
import { WorkloadCostEstimate } from "./workloadcostestimate";
/**
 * Workload cost estimates for a single time segment.
 */
export declare class SegmentCostEstimate extends SpeakeasyBase {
    /**
     * Estimated costs for each commitment.
     */
    commitmentCostEstimates?: CommitmentCostEstimate[];
    /**
     * Represents a point in time.
     */
    segmentStartTime?: EstimationTimePoint;
    /**
     * An estimated cost.
     */
    segmentTotalCostEstimate?: CostEstimate;
    /**
     * Estimated costs for each workload.
     */
    workloadCostEstimates?: WorkloadCostEstimate[];
}
