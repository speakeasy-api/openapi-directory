package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public ListExecutionPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}