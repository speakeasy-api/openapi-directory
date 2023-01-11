package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsTestIamPermissionsRequest {
    public CloudresourcemanagerOrganizationsTestIamPermissionsPathParams pathParams;
    public CloudresourcemanagerOrganizationsTestIamPermissionsRequest withPathParams(CloudresourcemanagerOrganizationsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams queryParams;
    public CloudresourcemanagerOrganizationsTestIamPermissionsRequest withQueryParams(CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudresourcemanagerOrganizationsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerOrganizationsTestIamPermissionsSecurity security;
    public CloudresourcemanagerOrganizationsTestIamPermissionsRequest withSecurity(CloudresourcemanagerOrganizationsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}