package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesPatchRequest {
    public CloudtasksProjectsLocationsQueuesPatchPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesPatchRequest withPathParams(CloudtasksProjectsLocationsQueuesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesPatchQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesPatchRequest withQueryParams(CloudtasksProjectsLocationsQueuesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Queue request;
    public CloudtasksProjectsLocationsQueuesPatchRequest withRequest(openapisdk.models.shared.Queue request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesPatchSecurity security;
    public CloudtasksProjectsLocationsQueuesPatchRequest withSecurity(CloudtasksProjectsLocationsQueuesPatchSecurity security) {
        this.security = security;
        return this;
    }
}