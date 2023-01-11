package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkservicesProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}