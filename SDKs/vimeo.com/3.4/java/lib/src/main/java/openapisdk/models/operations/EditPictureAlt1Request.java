package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditPictureAlt1Request {
    public EditPictureAlt1PathParams pathParams;
    public EditPictureAlt1Request withPathParams(EditPictureAlt1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.picture+json")
    public EditPictureAlt1RequestBody request;
    public EditPictureAlt1Request withRequest(EditPictureAlt1RequestBody request) {
        this.request = request;
        return this;
    }
    public EditPictureAlt1Security security;
    public EditPictureAlt1Request withSecurity(EditPictureAlt1Security security) {
        this.security = security;
        return this;
    }
}