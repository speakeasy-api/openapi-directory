package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchExecutionStepContextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ExecutionSid")
    public String executionSid;
    public FetchExecutionStepContextPathParams withExecutionSid(String executionSid) {
        this.executionSid = executionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FlowSid")
    public String flowSid;
    public FetchExecutionStepContextPathParams withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StepSid")
    public String stepSid;
    public FetchExecutionStepContextPathParams withStepSid(String stepSid) {
        this.stepSid = stepSid;
        return this;
    }
}