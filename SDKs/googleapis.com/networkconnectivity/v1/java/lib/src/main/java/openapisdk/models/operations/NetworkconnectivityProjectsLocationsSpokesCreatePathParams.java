package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkconnectivityProjectsLocationsSpokesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}