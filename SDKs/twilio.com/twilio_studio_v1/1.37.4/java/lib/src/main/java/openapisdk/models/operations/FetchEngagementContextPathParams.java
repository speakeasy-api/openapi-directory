package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEngagementContextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EngagementSid")
    public String engagementSid;
    public FetchEngagementContextPathParams withEngagementSid(String engagementSid) {
        this.engagementSid = engagementSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchEngagementContextPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}