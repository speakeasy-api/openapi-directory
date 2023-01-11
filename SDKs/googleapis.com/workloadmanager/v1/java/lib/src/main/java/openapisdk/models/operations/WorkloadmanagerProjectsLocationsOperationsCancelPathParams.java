package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WorkloadmanagerProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}