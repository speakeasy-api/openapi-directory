package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest {
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest withPathParams(AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest withQueryParams(AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity security;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest withSecurity(AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}