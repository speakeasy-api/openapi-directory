package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTextTrackAlt1Request {
    public CreateTextTrackAlt1PathParams pathParams;
    public CreateTextTrackAlt1Request withPathParams(CreateTextTrackAlt1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.video.texttrack+json")
    public CreateTextTrackAlt1RequestBody request;
    public CreateTextTrackAlt1Request withRequest(CreateTextTrackAlt1RequestBody request) {
        this.request = request;
        return this;
    }
    public CreateTextTrackAlt1Security security;
    public CreateTextTrackAlt1Request withSecurity(CreateTextTrackAlt1Security security) {
        this.security = security;
        return this;
    }
}