package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}