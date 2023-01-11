package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkloadmanagerProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}