package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsGatewaysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkservicesProjectsLocationsGatewaysListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}