package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesCreateRequest {
    public CloudtasksProjectsLocationsQueuesCreatePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesCreateRequest withPathParams(CloudtasksProjectsLocationsQueuesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesCreateQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesCreateRequest withQueryParams(CloudtasksProjectsLocationsQueuesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Queue request;
    public CloudtasksProjectsLocationsQueuesCreateRequest withRequest(openapisdk.models.shared.Queue request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesCreateSecurity security;
    public CloudtasksProjectsLocationsQueuesCreateRequest withSecurity(CloudtasksProjectsLocationsQueuesCreateSecurity security) {
        this.security = security;
        return this;
    }
}