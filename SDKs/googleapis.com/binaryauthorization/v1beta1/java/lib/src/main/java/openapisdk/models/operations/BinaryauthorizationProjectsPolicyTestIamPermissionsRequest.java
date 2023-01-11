package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsPolicyTestIamPermissionsRequest {
    public BinaryauthorizationProjectsPolicyTestIamPermissionsPathParams pathParams;
    public BinaryauthorizationProjectsPolicyTestIamPermissionsRequest withPathParams(BinaryauthorizationProjectsPolicyTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationProjectsPolicyTestIamPermissionsQueryParams queryParams;
    public BinaryauthorizationProjectsPolicyTestIamPermissionsRequest withQueryParams(BinaryauthorizationProjectsPolicyTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public BinaryauthorizationProjectsPolicyTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity security;
    public BinaryauthorizationProjectsPolicyTestIamPermissionsRequest withSecurity(BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}