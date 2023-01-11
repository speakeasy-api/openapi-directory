package openapisdk.models.operations;



public class YoutubeAnalyticsReportsQueryResponse {
    public String contentType;
    public YoutubeAnalyticsReportsQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryResponse queryResponse;
    public YoutubeAnalyticsReportsQueryResponse withQueryResponse(openapisdk.models.shared.QueryResponse queryResponse) {
        this.queryResponse = queryResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsReportsQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}