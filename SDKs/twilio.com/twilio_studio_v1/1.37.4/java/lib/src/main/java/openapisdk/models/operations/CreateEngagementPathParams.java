package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEngagementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public CreateEngagementPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}