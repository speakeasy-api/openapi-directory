package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkmanagementProjectsLocationsGlobalOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}