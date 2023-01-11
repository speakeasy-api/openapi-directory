package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}