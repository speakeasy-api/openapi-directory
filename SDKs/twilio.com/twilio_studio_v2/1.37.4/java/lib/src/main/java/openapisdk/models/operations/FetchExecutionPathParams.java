package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchExecutionPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchExecutionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}