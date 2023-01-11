package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkflowsProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}