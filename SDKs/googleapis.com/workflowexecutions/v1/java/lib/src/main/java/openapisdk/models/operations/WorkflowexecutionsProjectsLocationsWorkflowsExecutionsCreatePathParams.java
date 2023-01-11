package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}