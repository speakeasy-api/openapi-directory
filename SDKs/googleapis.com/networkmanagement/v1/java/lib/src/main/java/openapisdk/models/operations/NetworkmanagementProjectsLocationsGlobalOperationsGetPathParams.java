package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkmanagementProjectsLocationsGlobalOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}