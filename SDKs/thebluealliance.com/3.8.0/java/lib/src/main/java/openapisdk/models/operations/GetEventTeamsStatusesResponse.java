package openapisdk.models.operations;



public class GetEventTeamsStatusesResponse {
    public String contentType;
    public GetEventTeamsStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventTeamsStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventTeamsStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, openapisdk.models.shared.TeamEventStatus> getEventTeamsStatuses200ApplicationJSONObject;
    public GetEventTeamsStatusesResponse withGetEventTeamsStatuses200ApplicationJsonObject(java.util.Map<String, openapisdk.models.shared.TeamEventStatus> getEventTeamsStatuses200ApplicationJSONObject) {
        this.getEventTeamsStatuses200ApplicationJSONObject = getEventTeamsStatuses200ApplicationJSONObject;
        return this;
    }
}