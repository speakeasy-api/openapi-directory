package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapTestIamPermissionsRequest {
    public IapTestIamPermissionsPathParams pathParams;
    public IapTestIamPermissionsRequest withPathParams(IapTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapTestIamPermissionsQueryParams queryParams;
    public IapTestIamPermissionsRequest withQueryParams(IapTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public IapTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public IapTestIamPermissionsSecurity security;
    public IapTestIamPermissionsRequest withSecurity(IapTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}