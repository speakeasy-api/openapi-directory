package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchExecutionContextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ExecutionSid")
    public String executionSid;
    public FetchExecutionContextPathParams withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchExecutionContextPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}