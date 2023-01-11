package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsInternalRangesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkconnectivityProjectsLocationsInternalRangesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}