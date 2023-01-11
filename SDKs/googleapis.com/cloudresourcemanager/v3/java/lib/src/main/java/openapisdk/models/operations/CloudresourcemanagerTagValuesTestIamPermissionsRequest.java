package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesTestIamPermissionsRequest {
    public CloudresourcemanagerTagValuesTestIamPermissionsPathParams pathParams;
    public CloudresourcemanagerTagValuesTestIamPermissionsRequest withPathParams(CloudresourcemanagerTagValuesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerTagValuesTestIamPermissionsQueryParams queryParams;
    public CloudresourcemanagerTagValuesTestIamPermissionsRequest withQueryParams(CloudresourcemanagerTagValuesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudresourcemanagerTagValuesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagValuesTestIamPermissionsSecurity security;
    public CloudresourcemanagerTagValuesTestIamPermissionsRequest withSecurity(CloudresourcemanagerTagValuesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}