package openapisdk.models.operations;



public class GetTeamEventsKeysResponse {
    public String contentType;
    public GetTeamEventsKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventsKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventsKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getTeamEventsKeys200ApplicationJSONStrings;
    public GetTeamEventsKeysResponse withGetTeamEventsKeys200ApplicationJsonStrings(String[] getTeamEventsKeys200ApplicationJSONStrings) {
        this.getTeamEventsKeys200ApplicationJSONStrings = getTeamEventsKeys200ApplicationJSONStrings;
        return this;
    }
}