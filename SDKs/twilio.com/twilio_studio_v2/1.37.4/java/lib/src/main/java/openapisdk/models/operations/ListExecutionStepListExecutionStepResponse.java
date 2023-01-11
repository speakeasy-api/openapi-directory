package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExecutionStepListExecutionStepResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListExecutionStepListExecutionStepResponseMeta meta;
    public ListExecutionStepListExecutionStepResponse withMeta(ListExecutionStepListExecutionStepResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public openapisdk.models.shared.StudioV2FlowExecutionExecutionStep[] steps;
    public ListExecutionStepListExecutionStepResponse withSteps(openapisdk.models.shared.StudioV2FlowExecutionExecutionStep[] steps) {
        this.steps = steps;
        return this;
    }
}