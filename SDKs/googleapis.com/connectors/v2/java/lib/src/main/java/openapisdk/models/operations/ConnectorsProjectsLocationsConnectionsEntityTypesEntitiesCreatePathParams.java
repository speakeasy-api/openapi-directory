package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}