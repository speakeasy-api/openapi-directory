package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}