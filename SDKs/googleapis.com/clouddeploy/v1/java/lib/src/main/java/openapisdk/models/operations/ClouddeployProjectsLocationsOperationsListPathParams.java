package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ClouddeployProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}