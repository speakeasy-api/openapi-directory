package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPayCodeRequest {
    public PostPayCodePathParams pathParams;
    public PostPayCodeRequest withPathParams(PostPayCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPayCodeHeaders headers;
    public PostPayCodeRequest withHeaders(PostPayCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayCode request;
    public PostPayCodeRequest withRequest(openapisdk.models.shared.PayCode request) {
        this.request = request;
        return this;
    }
}