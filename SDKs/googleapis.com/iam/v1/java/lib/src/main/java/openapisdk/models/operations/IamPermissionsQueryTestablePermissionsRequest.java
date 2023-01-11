package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamPermissionsQueryTestablePermissionsRequest {
    public IamPermissionsQueryTestablePermissionsQueryParams queryParams;
    public IamPermissionsQueryTestablePermissionsRequest withQueryParams(IamPermissionsQueryTestablePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryTestablePermissionsRequest request;
    public IamPermissionsQueryTestablePermissionsRequest withRequest(openapisdk.models.shared.QueryTestablePermissionsRequest request) {
        this.request = request;
        return this;
    }
    public IamPermissionsQueryTestablePermissionsSecurity security;
    public IamPermissionsQueryTestablePermissionsRequest withSecurity(IamPermissionsQueryTestablePermissionsSecurity security) {
        this.security = security;
        return this;
    }
}