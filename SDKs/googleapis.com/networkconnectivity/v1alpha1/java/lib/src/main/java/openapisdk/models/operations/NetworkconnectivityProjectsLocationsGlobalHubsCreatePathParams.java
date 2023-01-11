package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}