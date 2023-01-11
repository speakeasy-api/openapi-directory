package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchStepContextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EngagementSid")
    public String engagementSid;
    public FetchStepContextPathParams withEngagementSid(String engagementSid) {
        this.engagementSid = engagementSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchStepContextPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StepSid")
    public String stepSid;
    public FetchStepContextPathParams withStepSid(String stepSid) {
        this.stepSid = stepSid;
        return this;
    }
}