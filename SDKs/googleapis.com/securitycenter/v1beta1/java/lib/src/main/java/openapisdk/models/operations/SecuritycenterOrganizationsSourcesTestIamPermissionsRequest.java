package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesTestIamPermissionsRequest {
    public SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams pathParams;
    public SecuritycenterOrganizationsSourcesTestIamPermissionsRequest withPathParams(SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesTestIamPermissionsRequest withQueryParams(SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public SecuritycenterOrganizationsSourcesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity security;
    public SecuritycenterOrganizationsSourcesTestIamPermissionsRequest withSecurity(SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}