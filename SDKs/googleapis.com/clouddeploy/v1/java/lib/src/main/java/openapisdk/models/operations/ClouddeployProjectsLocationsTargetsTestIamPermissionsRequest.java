package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest {
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams pathParams;
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest withPathParams(ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams queryParams;
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest withQueryParams(ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity security;
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest withSecurity(ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}