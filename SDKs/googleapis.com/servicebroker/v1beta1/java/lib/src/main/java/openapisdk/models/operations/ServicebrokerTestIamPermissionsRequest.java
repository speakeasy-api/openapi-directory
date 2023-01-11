package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerTestIamPermissionsRequest {
    public ServicebrokerTestIamPermissionsPathParams pathParams;
    public ServicebrokerTestIamPermissionsRequest withPathParams(ServicebrokerTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerTestIamPermissionsQueryParams queryParams;
    public ServicebrokerTestIamPermissionsRequest withQueryParams(ServicebrokerTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request;
    public ServicebrokerTestIamPermissionsRequest withRequest(openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ServicebrokerTestIamPermissionsSecurity security;
    public ServicebrokerTestIamPermissionsRequest withSecurity(ServicebrokerTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}