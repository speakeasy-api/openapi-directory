package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsBatchDeleteRequest {
    public JobsProjectsJobsBatchDeletePathParams pathParams;
    public JobsProjectsJobsBatchDeleteRequest withPathParams(JobsProjectsJobsBatchDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsJobsBatchDeleteQueryParams queryParams;
    public JobsProjectsJobsBatchDeleteRequest withQueryParams(JobsProjectsJobsBatchDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteJobsRequest request;
    public JobsProjectsJobsBatchDeleteRequest withRequest(openapisdk.models.shared.BatchDeleteJobsRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsJobsBatchDeleteSecurity security;
    public JobsProjectsJobsBatchDeleteRequest withSecurity(JobsProjectsJobsBatchDeleteSecurity security) {
        this.security = security;
        return this;
    }
}