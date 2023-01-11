package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}