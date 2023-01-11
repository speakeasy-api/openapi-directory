package openapisdk.models.operations;



public class SentimentMultipartResponse {
    public String contentType;
    public SentimentMultipartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SentimentPredictResponse sentimentPredictResponse;
    public SentimentMultipartResponse withSentimentPredictResponse(openapisdk.models.shared.SentimentPredictResponse sentimentPredictResponse) {
        this.sentimentPredictResponse = sentimentPredictResponse;
        return this;
    }
    public Long statusCode;
    public SentimentMultipartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}