package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}