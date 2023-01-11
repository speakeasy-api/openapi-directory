package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}