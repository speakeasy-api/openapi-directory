package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudioV2FlowExecutionExecutionStepExecutionStepContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public StudioV2FlowExecutionExecutionStepExecutionStepContext withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Object context;
    public StudioV2FlowExecutionExecutionStepExecutionStepContext withContext(Object context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execution_sid")
    public String executionSid;
    public StudioV2FlowExecutionExecutionStepExecutionStepContext withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow_sid")
    public String flowSid;
    public StudioV2FlowExecutionExecutionStepExecutionStepContext withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step_sid")
    public String stepSid;
    public StudioV2FlowExecutionExecutionStepExecutionStepContext withStepSid(String stepSid) {
        this.stepSid = stepSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StudioV2FlowExecutionExecutionStepExecutionStepContext withUrl(String url) {
        this.url = url;
        return this;
    }
}