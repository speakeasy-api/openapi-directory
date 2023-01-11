package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentCostEstimate
 * Workload cost estimates for a single time segment.
**/
public class SegmentCostEstimate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentCostEstimates")
    public CommitmentCostEstimate[] commitmentCostEstimates;
    public SegmentCostEstimate withCommitmentCostEstimates(CommitmentCostEstimate[] commitmentCostEstimates) {
        this.commitmentCostEstimates = commitmentCostEstimates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentStartTime")
    public EstimationTimePoint segmentStartTime;
    public SegmentCostEstimate withSegmentStartTime(EstimationTimePoint segmentStartTime) {
        this.segmentStartTime = segmentStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentTotalCostEstimate")
    public CostEstimate segmentTotalCostEstimate;
    public SegmentCostEstimate withSegmentTotalCostEstimate(CostEstimate segmentTotalCostEstimate) {
        this.segmentTotalCostEstimate = segmentTotalCostEstimate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadCostEstimates")
    public WorkloadCostEstimate[] workloadCostEstimates;
    public SegmentCostEstimate withWorkloadCostEstimates(WorkloadCostEstimate[] workloadCostEstimates) {
        this.workloadCostEstimates = workloadCostEstimates;
        return this;
    }
}