package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public UpdateExecutionPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateExecutionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}