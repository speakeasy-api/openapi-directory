package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineCondition
 * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
**/
public class PipelineCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineReadyCondition")
    public PipelineReadyCondition pipelineReadyCondition;
    public PipelineCondition withPipelineReadyCondition(PipelineReadyCondition pipelineReadyCondition) {
        this.pipelineReadyCondition = pipelineReadyCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetsPresentCondition")
    public TargetsPresentCondition targetsPresentCondition;
    public PipelineCondition withTargetsPresentCondition(TargetsPresentCondition targetsPresentCondition) {
        this.targetsPresentCondition = targetsPresentCondition;
        return this;
    }
}