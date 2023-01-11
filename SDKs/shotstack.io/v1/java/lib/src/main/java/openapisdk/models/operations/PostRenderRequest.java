package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRenderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Edit request;
    public PostRenderRequest withRequest(openapisdk.models.shared.Edit request) {
        this.request = request;
        return this;
    }
    public PostRenderSecurity security;
    public PostRenderRequest withSecurity(PostRenderSecurity security) {
        this.security = security;
        return this;
    }
}