package openapisdk.models.operations;



public class GetEventRankingsResponse {
    public String contentType;
    public GetEventRankingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventRanking eventRanking;
    public GetEventRankingsResponse withEventRanking(openapisdk.models.shared.EventRanking eventRanking) {
        this.eventRanking = eventRanking;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventRankingsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventRankingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}