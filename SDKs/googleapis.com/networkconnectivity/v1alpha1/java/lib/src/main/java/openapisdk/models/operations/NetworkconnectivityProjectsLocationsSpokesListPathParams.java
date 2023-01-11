package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkconnectivityProjectsLocationsSpokesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}