package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Html5RenderRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Html5RenderRequestBody request;
    public Html5RenderRequest withRequest(Html5RenderRequestBody request) {
        this.request = request;
        return this;
    }
}