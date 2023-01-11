package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryResponseRequest {
    public GetQueryResponseHeaders headers;
    public GetQueryResponseRequest withHeaders(GetQueryResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Query request;
    public GetQueryResponseRequest withRequest(openapisdk.models.shared.Query request) {
        this.request = request;
        return this;
    }
}