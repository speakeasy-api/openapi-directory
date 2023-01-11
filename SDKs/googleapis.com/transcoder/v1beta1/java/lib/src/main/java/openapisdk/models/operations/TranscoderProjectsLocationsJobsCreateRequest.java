package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobsCreateRequest {
    public TranscoderProjectsLocationsJobsCreatePathParams pathParams;
    public TranscoderProjectsLocationsJobsCreateRequest withPathParams(TranscoderProjectsLocationsJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranscoderProjectsLocationsJobsCreateQueryParams queryParams;
    public TranscoderProjectsLocationsJobsCreateRequest withQueryParams(TranscoderProjectsLocationsJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobInput request;
    public TranscoderProjectsLocationsJobsCreateRequest withRequest(openapisdk.models.shared.JobInput request) {
        this.request = request;
        return this;
    }
    public TranscoderProjectsLocationsJobsCreateSecurity security;
    public TranscoderProjectsLocationsJobsCreateRequest withSecurity(TranscoderProjectsLocationsJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}