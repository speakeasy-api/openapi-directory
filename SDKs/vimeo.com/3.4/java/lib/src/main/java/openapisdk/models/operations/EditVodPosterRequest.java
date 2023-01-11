package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVodPosterRequest {
    public EditVodPosterPathParams pathParams;
    public EditVodPosterRequest withPathParams(EditVodPosterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.picture+json")
    public EditVodPosterRequestBody request;
    public EditVodPosterRequest withRequest(EditVodPosterRequestBody request) {
        this.request = request;
        return this;
    }
    public EditVodPosterSecurity security;
    public EditVodPosterRequest withSecurity(EditVodPosterSecurity security) {
        this.security = security;
        return this;
    }
}