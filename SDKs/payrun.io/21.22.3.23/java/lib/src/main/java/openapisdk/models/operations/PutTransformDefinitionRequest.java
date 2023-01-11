package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTransformDefinitionRequest {
    public PutTransformDefinitionPathParams pathParams;
    public PutTransformDefinitionRequest withPathParams(PutTransformDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutTransformDefinitionHeaders headers;
    public PutTransformDefinitionRequest withHeaders(PutTransformDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransformDefinition request;
    public PutTransformDefinitionRequest withRequest(openapisdk.models.shared.TransformDefinition request) {
        this.request = request;
        return this;
    }
}