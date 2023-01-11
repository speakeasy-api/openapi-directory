package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}