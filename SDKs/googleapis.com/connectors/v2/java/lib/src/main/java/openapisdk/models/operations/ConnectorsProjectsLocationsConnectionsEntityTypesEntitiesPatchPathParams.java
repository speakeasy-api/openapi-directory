package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}