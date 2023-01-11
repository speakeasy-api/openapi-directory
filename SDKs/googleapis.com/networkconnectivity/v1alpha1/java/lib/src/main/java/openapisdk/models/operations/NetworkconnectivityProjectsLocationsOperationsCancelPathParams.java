package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkconnectivityProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}