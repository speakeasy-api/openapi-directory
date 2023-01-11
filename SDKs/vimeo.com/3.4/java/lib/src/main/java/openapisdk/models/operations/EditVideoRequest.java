package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVideoRequest {
    public EditVideoPathParams pathParams;
    public EditVideoRequest withPathParams(EditVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.video+json")
    public EditVideoRequestBody request;
    public EditVideoRequest withRequest(EditVideoRequestBody request) {
        this.request = request;
        return this;
    }
    public EditVideoSecurity security;
    public EditVideoRequest withSecurity(EditVideoSecurity security) {
        this.security = security;
        return this;
    }
}