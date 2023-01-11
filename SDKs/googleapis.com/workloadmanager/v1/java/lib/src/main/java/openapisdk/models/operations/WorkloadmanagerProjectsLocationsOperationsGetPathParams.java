package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkloadmanagerProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}