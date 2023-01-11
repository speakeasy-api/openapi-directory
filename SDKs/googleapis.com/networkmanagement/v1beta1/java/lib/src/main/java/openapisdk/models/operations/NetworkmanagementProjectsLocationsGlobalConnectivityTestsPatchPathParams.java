package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}