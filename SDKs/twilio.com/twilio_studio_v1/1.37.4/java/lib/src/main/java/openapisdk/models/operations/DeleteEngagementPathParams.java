package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEngagementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public DeleteEngagementPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteEngagementPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}