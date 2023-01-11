package openapisdk.models.operations;



public class GetTeamEventsStatusesByYearResponse {
    public String contentType;
    public GetTeamEventsStatusesByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventsStatusesByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventsStatusesByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, openapisdk.models.shared.TeamEventStatus> getTeamEventsStatusesByYear200ApplicationJSONObject;
    public GetTeamEventsStatusesByYearResponse withGetTeamEventsStatusesByYear200ApplicationJsonObject(java.util.Map<String, openapisdk.models.shared.TeamEventStatus> getTeamEventsStatusesByYear200ApplicationJSONObject) {
        this.getTeamEventsStatusesByYear200ApplicationJSONObject = getTeamEventsStatusesByYear200ApplicationJSONObject;
        return this;
    }
}