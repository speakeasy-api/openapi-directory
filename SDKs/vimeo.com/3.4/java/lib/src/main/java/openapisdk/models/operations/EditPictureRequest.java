package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditPictureRequest {
    public EditPicturePathParams pathParams;
    public EditPictureRequest withPathParams(EditPicturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.picture+json")
    public EditPictureRequestBody request;
    public EditPictureRequest withRequest(EditPictureRequestBody request) {
        this.request = request;
        return this;
    }
    public EditPictureSecurity security;
    public EditPictureRequest withSecurity(EditPictureSecurity security) {
        this.security = security;
        return this;
    }
}