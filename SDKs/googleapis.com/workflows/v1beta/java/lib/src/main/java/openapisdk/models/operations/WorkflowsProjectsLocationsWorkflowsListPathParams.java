package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsWorkflowsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WorkflowsProjectsLocationsWorkflowsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}