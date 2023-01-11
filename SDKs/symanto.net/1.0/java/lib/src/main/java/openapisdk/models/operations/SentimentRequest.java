package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SentimentRequest {
    public SentimentQueryParams queryParams;
    public SentimentRequest withQueryParams(SentimentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post[] request;
    public SentimentRequest withRequest(openapisdk.models.shared.Post[] request) {
        this.request = request;
        return this;
    }
}