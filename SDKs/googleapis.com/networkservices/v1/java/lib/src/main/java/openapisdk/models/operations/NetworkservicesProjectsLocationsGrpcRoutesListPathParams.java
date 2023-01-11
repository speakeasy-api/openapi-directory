package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsGrpcRoutesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkservicesProjectsLocationsGrpcRoutesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}