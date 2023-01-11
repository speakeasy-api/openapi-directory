package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entityType")
    public String entityType;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
}