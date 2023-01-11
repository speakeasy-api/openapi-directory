package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest {
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsPathParams pathParams;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest withPathParams(CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsQueryParams queryParams;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest withQueryParams(CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity security;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest withSecurity(CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}