package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}