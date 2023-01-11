package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCisLineTypeIntoEmployerRequest {
    public PostCisLineTypeIntoEmployerPathParams pathParams;
    public PostCisLineTypeIntoEmployerRequest withPathParams(PostCisLineTypeIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCisLineTypeIntoEmployerHeaders headers;
    public PostCisLineTypeIntoEmployerRequest withHeaders(PostCisLineTypeIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CisLineType request;
    public PostCisLineTypeIntoEmployerRequest withRequest(openapisdk.models.shared.CisLineType request) {
        this.request = request;
        return this;
    }
}