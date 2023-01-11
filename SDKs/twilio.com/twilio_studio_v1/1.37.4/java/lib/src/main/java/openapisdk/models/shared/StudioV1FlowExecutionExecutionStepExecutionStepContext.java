package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudioV1FlowExecutionExecutionStepExecutionStepContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public StudioV1FlowExecutionExecutionStepExecutionStepContext withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Object context;
    public StudioV1FlowExecutionExecutionStepExecutionStepContext withContext(Object context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execution_sid")
    public String executionSid;
    public StudioV1FlowExecutionExecutionStepExecutionStepContext withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow_sid")
    public String flowSid;
    public StudioV1FlowExecutionExecutionStepExecutionStepContext withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step_sid")
    public String stepSid;
    public StudioV1FlowExecutionExecutionStepExecutionStepContext withStepSid(String stepSid) {
        this.stepSid = stepSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StudioV1FlowExecutionExecutionStepExecutionStepContext withUrl(String url) {
        this.url = url;
        return this;
    }
}