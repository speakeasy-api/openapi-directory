package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SentimentMultipartRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SentimentPredictRequest sentimentPredictRequest;
    public SentimentMultipartRequests withSentimentPredictRequest(openapisdk.models.shared.SentimentPredictRequest sentimentPredictRequest) {
        this.sentimentPredictRequest = sentimentPredictRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.SentimentPredictRequest sentimentPredictRequest1;
    public SentimentMultipartRequests withSentimentPredictRequest1(openapisdk.models.shared.SentimentPredictRequest sentimentPredictRequest1) {
        this.sentimentPredictRequest1 = sentimentPredictRequest1;
        return this;
    }
}