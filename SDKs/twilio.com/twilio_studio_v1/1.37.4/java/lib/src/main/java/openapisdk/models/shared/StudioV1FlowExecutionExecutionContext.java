package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudioV1FlowExecutionExecutionContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public StudioV1FlowExecutionExecutionContext withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Object context;
    public StudioV1FlowExecutionExecutionContext withContext(Object context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execution_sid")
    public String executionSid;
    public StudioV1FlowExecutionExecutionContext withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow_sid")
    public String flowSid;
    public StudioV1FlowExecutionExecutionContext withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StudioV1FlowExecutionExecutionContext withUrl(String url) {
        this.url = url;
        return this;
    }
}