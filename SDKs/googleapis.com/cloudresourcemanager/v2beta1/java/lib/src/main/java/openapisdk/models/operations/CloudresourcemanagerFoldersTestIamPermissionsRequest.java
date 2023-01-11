package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersTestIamPermissionsRequest {
    public CloudresourcemanagerFoldersTestIamPermissionsPathParams pathParams;
    public CloudresourcemanagerFoldersTestIamPermissionsRequest withPathParams(CloudresourcemanagerFoldersTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerFoldersTestIamPermissionsQueryParams queryParams;
    public CloudresourcemanagerFoldersTestIamPermissionsRequest withQueryParams(CloudresourcemanagerFoldersTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudresourcemanagerFoldersTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersTestIamPermissionsSecurity security;
    public CloudresourcemanagerFoldersTestIamPermissionsRequest withSecurity(CloudresourcemanagerFoldersTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}