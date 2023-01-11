package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ClouddeployProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}