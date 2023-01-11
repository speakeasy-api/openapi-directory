package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudioV1FlowEngagementStepStepContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public StudioV1FlowEngagementStepStepContext withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Object context;
    public StudioV1FlowEngagementStepStepContext withContext(Object context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engagement_sid")
    public String engagementSid;
    public StudioV1FlowEngagementStepStepContext withEngagementSid(String engagementSid) {
        this.engagementSid = engagementSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow_sid")
    public String flowSid;
    public StudioV1FlowEngagementStepStepContext withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step_sid")
    public String stepSid;
    public StudioV1FlowEngagementStepStepContext withStepSid(String stepSid) {
        this.stepSid = stepSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StudioV1FlowEngagementStepStepContext withUrl(String url) {
        this.url = url;
        return this;
    }
}