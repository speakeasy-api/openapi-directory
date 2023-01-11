package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditTextTrackRequest {
    public EditTextTrackPathParams pathParams;
    public EditTextTrackRequest withPathParams(EditTextTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.video.texttrack+json")
    public EditTextTrackRequestBody request;
    public EditTextTrackRequest withRequest(EditTextTrackRequestBody request) {
        this.request = request;
        return this;
    }
    public EditTextTrackSecurity security;
    public EditTextTrackRequest withSecurity(EditTextTrackSecurity security) {
        this.security = security;
        return this;
    }
}