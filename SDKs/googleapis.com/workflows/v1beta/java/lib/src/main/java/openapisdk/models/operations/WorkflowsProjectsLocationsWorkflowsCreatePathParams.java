package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsWorkflowsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WorkflowsProjectsLocationsWorkflowsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}