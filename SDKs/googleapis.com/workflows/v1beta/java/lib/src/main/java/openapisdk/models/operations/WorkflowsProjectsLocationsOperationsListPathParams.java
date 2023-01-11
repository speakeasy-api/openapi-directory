package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkflowsProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}