package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsTestIamPermissionsRequest {
    public CloudresourcemanagerProjectsTestIamPermissionsPathParams pathParams;
    public CloudresourcemanagerProjectsTestIamPermissionsRequest withPathParams(CloudresourcemanagerProjectsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsTestIamPermissionsQueryParams queryParams;
    public CloudresourcemanagerProjectsTestIamPermissionsRequest withQueryParams(CloudresourcemanagerProjectsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudresourcemanagerProjectsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsTestIamPermissionsSecurity security;
    public CloudresourcemanagerProjectsTestIamPermissionsRequest withSecurity(CloudresourcemanagerProjectsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}