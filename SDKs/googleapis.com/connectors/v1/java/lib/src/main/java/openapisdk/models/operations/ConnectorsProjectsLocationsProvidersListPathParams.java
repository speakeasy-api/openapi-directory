package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ConnectorsProjectsLocationsProvidersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}