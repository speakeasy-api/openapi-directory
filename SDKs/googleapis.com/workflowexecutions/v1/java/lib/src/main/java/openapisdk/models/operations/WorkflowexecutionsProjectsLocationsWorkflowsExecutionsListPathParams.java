package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}