package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest {
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest withPathParams(CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportJobInput request;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest withRequest(openapisdk.models.shared.ImportJobInput request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity security;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest withSecurity(CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}