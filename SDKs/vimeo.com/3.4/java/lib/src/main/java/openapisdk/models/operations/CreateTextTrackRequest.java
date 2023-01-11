package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTextTrackRequest {
    public CreateTextTrackPathParams pathParams;
    public CreateTextTrackRequest withPathParams(CreateTextTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.video.texttrack+json")
    public CreateTextTrackRequestBody request;
    public CreateTextTrackRequest withRequest(CreateTextTrackRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateTextTrackSecurity security;
    public CreateTextTrackRequest withSecurity(CreateTextTrackSecurity security) {
        this.security = security;
        return this;
    }
}