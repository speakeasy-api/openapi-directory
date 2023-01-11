package openapisdk.models.operations;



public class GetEventInsightsResponse {
    public String contentType;
    public GetEventInsightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventInsights eventInsights;
    public GetEventInsightsResponse withEventInsights(openapisdk.models.shared.EventInsights eventInsights) {
        this.eventInsights = eventInsights;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventInsightsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventInsightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}