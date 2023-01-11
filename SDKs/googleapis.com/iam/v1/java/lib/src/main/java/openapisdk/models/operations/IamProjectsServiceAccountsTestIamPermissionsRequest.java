package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsTestIamPermissionsRequest {
    public IamProjectsServiceAccountsTestIamPermissionsPathParams pathParams;
    public IamProjectsServiceAccountsTestIamPermissionsRequest withPathParams(IamProjectsServiceAccountsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsTestIamPermissionsQueryParams queryParams;
    public IamProjectsServiceAccountsTestIamPermissionsRequest withQueryParams(IamProjectsServiceAccountsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public IamProjectsServiceAccountsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsTestIamPermissionsSecurity security;
    public IamProjectsServiceAccountsTestIamPermissionsRequest withSecurity(IamProjectsServiceAccountsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}