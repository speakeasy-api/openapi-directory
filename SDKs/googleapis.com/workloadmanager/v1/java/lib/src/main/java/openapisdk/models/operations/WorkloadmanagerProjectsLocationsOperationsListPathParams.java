package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkloadmanagerProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}