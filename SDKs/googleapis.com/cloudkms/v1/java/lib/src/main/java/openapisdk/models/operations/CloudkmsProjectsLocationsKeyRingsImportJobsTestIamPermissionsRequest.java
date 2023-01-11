package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest {
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest withPathParams(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity security;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest withSecurity(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}