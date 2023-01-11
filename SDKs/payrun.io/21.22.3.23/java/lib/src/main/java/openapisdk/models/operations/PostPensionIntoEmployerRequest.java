package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPensionIntoEmployerRequest {
    public PostPensionIntoEmployerPathParams pathParams;
    public PostPensionIntoEmployerRequest withPathParams(PostPensionIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPensionIntoEmployerHeaders headers;
    public PostPensionIntoEmployerRequest withHeaders(PostPensionIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Pension request;
    public PostPensionIntoEmployerRequest withRequest(openapisdk.models.shared.Pension request) {
        this.request = request;
        return this;
    }
}