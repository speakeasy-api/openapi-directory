package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchStepPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EngagementSid")
    public String engagementSid;
    public FetchStepPathParams withEngagementSid(String engagementSid) {
        this.engagementSid = engagementSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchStepPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchStepPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}