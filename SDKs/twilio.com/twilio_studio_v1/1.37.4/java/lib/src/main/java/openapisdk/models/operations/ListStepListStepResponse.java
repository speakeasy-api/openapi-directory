package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStepListStepResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListStepListStepResponseMeta meta;
    public ListStepListStepResponse withMeta(ListStepListStepResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public openapisdk.models.shared.StudioV1FlowEngagementStep[] steps;
    public ListStepListStepResponse withSteps(openapisdk.models.shared.StudioV1FlowEngagementStep[] steps) {
        this.steps = steps;
        return this;
    }
}