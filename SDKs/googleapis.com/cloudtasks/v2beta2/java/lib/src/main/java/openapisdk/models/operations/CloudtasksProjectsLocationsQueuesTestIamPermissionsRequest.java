package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest {
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest withPathParams(CloudtasksProjectsLocationsQueuesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest withQueryParams(CloudtasksProjectsLocationsQueuesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity security;
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest withSecurity(CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}