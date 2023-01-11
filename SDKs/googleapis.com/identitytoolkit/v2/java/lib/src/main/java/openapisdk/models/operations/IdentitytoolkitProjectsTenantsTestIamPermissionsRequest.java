package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsTestIamPermissionsRequest {
    public IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams pathParams;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsRequest withPathParams(IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsRequest withQueryParams(IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsRequest withRequest(openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity security;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsRequest withSecurity(IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}