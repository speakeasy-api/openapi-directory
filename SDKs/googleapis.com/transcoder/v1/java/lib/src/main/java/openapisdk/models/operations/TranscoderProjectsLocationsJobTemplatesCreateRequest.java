package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobTemplatesCreateRequest {
    public TranscoderProjectsLocationsJobTemplatesCreatePathParams pathParams;
    public TranscoderProjectsLocationsJobTemplatesCreateRequest withPathParams(TranscoderProjectsLocationsJobTemplatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranscoderProjectsLocationsJobTemplatesCreateQueryParams queryParams;
    public TranscoderProjectsLocationsJobTemplatesCreateRequest withQueryParams(TranscoderProjectsLocationsJobTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobTemplate request;
    public TranscoderProjectsLocationsJobTemplatesCreateRequest withRequest(openapisdk.models.shared.JobTemplate request) {
        this.request = request;
        return this;
    }
    public TranscoderProjectsLocationsJobTemplatesCreateSecurity security;
    public TranscoderProjectsLocationsJobTemplatesCreateRequest withSecurity(TranscoderProjectsLocationsJobTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}