package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVideoCreditRequest {
    public EditVideoCreditPathParams pathParams;
    public EditVideoCreditRequest withPathParams(EditVideoCreditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.credit+json")
    public EditVideoCreditRequestBody request;
    public EditVideoCreditRequest withRequest(EditVideoCreditRequestBody request) {
        this.request = request;
        return this;
    }
    public EditVideoCreditSecurity security;
    public EditVideoCreditRequest withSecurity(EditVideoCreditSecurity security) {
        this.security = security;
        return this;
    }
}