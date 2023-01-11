package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams withName(String name) {
        this.name = name;
        return this;
    }
}