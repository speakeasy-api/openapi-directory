package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkconnectivityProjectsLocationsSpokesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}