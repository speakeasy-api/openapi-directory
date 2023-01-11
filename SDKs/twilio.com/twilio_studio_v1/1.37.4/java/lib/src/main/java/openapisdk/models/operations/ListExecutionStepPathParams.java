package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExecutionStepPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ExecutionSid")
    public String executionSid;
    public ListExecutionStepPathParams withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public ListExecutionStepPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
}