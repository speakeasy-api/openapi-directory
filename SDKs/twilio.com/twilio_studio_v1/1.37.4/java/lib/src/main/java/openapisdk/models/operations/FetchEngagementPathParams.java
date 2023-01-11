package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEngagementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchEngagementPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchEngagementPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}