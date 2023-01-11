package openapisdk.models.operations;



public class SentimentMultipartRequest {
    public SentimentMultipartRequests request;
    public SentimentMultipartRequest withRequest(SentimentMultipartRequests request) {
        this.request = request;
        return this;
    }
    public SentimentMultipartSecurity security;
    public SentimentMultipartRequest withSecurity(SentimentMultipartSecurity security) {
        this.security = security;
        return this;
    }
}