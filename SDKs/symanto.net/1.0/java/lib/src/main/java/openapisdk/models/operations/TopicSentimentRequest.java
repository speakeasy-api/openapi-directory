package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicSentimentRequest {
    public TopicSentimentQueryParams queryParams;
    public TopicSentimentRequest withQueryParams(TopicSentimentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post[] request;
    public TopicSentimentRequest withRequest(openapisdk.models.shared.Post[] request) {
        this.request = request;
        return this;
    }
}