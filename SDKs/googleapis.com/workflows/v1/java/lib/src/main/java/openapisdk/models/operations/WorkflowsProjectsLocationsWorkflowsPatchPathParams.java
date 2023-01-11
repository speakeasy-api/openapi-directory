package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsWorkflowsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkflowsProjectsLocationsWorkflowsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}