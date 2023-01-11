package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkmanagementProjectsLocationsGlobalOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}