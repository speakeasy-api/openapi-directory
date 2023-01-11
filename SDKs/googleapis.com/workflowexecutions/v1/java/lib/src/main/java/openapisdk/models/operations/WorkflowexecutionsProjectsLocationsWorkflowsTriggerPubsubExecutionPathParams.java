package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow")
    public String workflow;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams withWorkflow(String workflow) {
        this.workflow = workflow;
        return this;
    }
}