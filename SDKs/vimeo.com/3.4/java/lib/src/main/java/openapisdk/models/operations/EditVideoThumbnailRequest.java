package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVideoThumbnailRequest {
    public EditVideoThumbnailPathParams pathParams;
    public EditVideoThumbnailRequest withPathParams(EditVideoThumbnailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.picture+json")
    public EditVideoThumbnailRequestBody request;
    public EditVideoThumbnailRequest withRequest(EditVideoThumbnailRequestBody request) {
        this.request = request;
        return this;
    }
    public EditVideoThumbnailSecurity security;
    public EditVideoThumbnailRequest withSecurity(EditVideoThumbnailSecurity security) {
        this.security = security;
        return this;
    }
}