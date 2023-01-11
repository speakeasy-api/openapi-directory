package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsCreateRequest {
    public YoutubereportingJobsCreateQueryParams queryParams;
    public YoutubereportingJobsCreateRequest withQueryParams(YoutubereportingJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Job request;
    public YoutubereportingJobsCreateRequest withRequest(openapisdk.models.shared.Job request) {
        this.request = request;
        return this;
    }
    public YoutubereportingJobsCreateSecurity security;
    public YoutubereportingJobsCreateRequest withSecurity(YoutubereportingJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}