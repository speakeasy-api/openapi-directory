package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsClientEventsCreateRequest {
    public JobsProjectsTenantsClientEventsCreatePathParams pathParams;
    public JobsProjectsTenantsClientEventsCreateRequest withPathParams(JobsProjectsTenantsClientEventsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsClientEventsCreateQueryParams queryParams;
    public JobsProjectsTenantsClientEventsCreateRequest withQueryParams(JobsProjectsTenantsClientEventsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientEvent request;
    public JobsProjectsTenantsClientEventsCreateRequest withRequest(openapisdk.models.shared.ClientEvent request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsClientEventsCreateSecurity security;
    public JobsProjectsTenantsClientEventsCreateRequest withSecurity(JobsProjectsTenantsClientEventsCreateSecurity security) {
        this.security = security;
        return this;
    }
}