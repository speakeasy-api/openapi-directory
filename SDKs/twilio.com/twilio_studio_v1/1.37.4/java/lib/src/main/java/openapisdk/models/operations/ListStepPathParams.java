package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStepPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EngagementSid")
    public String engagementSid;
    public ListStepPathParams withEngagementSid(String engagementSid) {
        this.engagementSid = engagementSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public ListStepPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}