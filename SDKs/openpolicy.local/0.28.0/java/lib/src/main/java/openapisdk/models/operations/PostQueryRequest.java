package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQueryRequest {
    public PostQueryQueryParams queryParams;
    public PostQueryRequest withQueryParams(PostQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-yaml")
    public byte[] request;
    public PostQueryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}