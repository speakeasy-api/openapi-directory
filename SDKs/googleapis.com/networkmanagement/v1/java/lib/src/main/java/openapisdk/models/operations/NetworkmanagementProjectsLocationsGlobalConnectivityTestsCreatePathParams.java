package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}