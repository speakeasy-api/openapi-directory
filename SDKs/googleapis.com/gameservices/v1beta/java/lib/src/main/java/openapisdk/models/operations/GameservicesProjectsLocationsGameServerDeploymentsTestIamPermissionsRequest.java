package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest {
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams pathParams;
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest withPathParams(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams queryParams;
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest withQueryParams(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity security;
    public GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest withSecurity(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}