package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsFetchRequest {
    public PostV05ConsentsFetchHeaders headers;
    public PostV05ConsentsFetchRequest withHeaders(PostV05ConsentsFetchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConsentFetchRequest request;
    public PostV05ConsentsFetchRequest withRequest(openapisdk.models.shared.ConsentFetchRequest request) {
        this.request = request;
        return this;
    }
}