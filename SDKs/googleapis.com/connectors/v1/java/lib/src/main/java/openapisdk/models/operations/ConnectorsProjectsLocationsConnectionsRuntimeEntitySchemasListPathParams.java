package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}