package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEngagementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public ListEngagementPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}