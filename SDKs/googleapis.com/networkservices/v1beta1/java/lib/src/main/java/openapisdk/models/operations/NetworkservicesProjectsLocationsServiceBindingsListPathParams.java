package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsServiceBindingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkservicesProjectsLocationsServiceBindingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}