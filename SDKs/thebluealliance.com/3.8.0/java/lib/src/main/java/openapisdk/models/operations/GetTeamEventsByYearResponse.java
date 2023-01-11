package openapisdk.models.operations;



public class GetTeamEventsByYearResponse {
    public String contentType;
    public GetTeamEventsByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public GetTeamEventsByYearResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventsByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventsByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}