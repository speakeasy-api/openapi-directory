package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsWorkflowsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkflowsProjectsLocationsWorkflowsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}