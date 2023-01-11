package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditUserRequest {
    public EditUserPathParams pathParams;
    public EditUserRequest withPathParams(EditUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.user+json")
    public EditUserRequestBody request;
    public EditUserRequest withRequest(EditUserRequestBody request) {
        this.request = request;
        return this;
    }
}