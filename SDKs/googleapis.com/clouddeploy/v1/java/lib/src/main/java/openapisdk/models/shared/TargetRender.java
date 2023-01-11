package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetRender {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCause")
    public TargetRenderFailureCauseEnum failureCause;
    public TargetRender withFailureCause(TargetRenderFailureCauseEnum failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMessage")
    public String failureMessage;
    public TargetRender withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderingBuild")
    public String renderingBuild;
    public TargetRender withRenderingBuild(String renderingBuild) {
        this.renderingBuild = renderingBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderingState")
    public TargetRenderRenderingStateEnum renderingState;
    public TargetRender withRenderingState(TargetRenderRenderingStateEnum renderingState) {
        this.renderingState = renderingState;
        return this;
    }
}