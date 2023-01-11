package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransformDefinitionRequest {
    public PostTransformDefinitionHeaders headers;
    public PostTransformDefinitionRequest withHeaders(PostTransformDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransformDefinition request;
    public PostTransformDefinitionRequest withRequest(openapisdk.models.shared.TransformDefinition request) {
        this.request = request;
        return this;
    }
}