package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersConnectorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ConnectorsProjectsLocationsProvidersConnectorsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}