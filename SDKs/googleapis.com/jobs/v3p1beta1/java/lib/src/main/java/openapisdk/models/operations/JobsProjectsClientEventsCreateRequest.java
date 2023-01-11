package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsClientEventsCreateRequest {
    public JobsProjectsClientEventsCreatePathParams pathParams;
    public JobsProjectsClientEventsCreateRequest withPathParams(JobsProjectsClientEventsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsClientEventsCreateQueryParams queryParams;
    public JobsProjectsClientEventsCreateRequest withQueryParams(JobsProjectsClientEventsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateClientEventRequest request;
    public JobsProjectsClientEventsCreateRequest withRequest(openapisdk.models.shared.CreateClientEventRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsClientEventsCreateSecurity security;
    public JobsProjectsClientEventsCreateRequest withSecurity(JobsProjectsClientEventsCreateSecurity security) {
        this.security = security;
        return this;
    }
}