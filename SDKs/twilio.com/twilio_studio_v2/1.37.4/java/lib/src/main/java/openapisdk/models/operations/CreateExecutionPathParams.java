package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public CreateExecutionPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}