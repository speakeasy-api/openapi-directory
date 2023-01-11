package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest {
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsPathParams pathParams;
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest withPathParams(RuntimeconfigProjectsConfigsWaitersTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsQueryParams queryParams;
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest withQueryParams(RuntimeconfigProjectsConfigsWaitersTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity security;
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest withSecurity(RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}