package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchExecutionStepPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ExecutionSid")
    public String executionSid;
    public FetchExecutionStepPathParams withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchExecutionStepPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchExecutionStepPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}