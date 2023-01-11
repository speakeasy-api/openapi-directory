package openapisdk.models.operations;



public class GetEventTeamsKeysResponse {
    public String contentType;
    public GetEventTeamsKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventTeamsKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventTeamsKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getEventTeamsKeys200ApplicationJSONStrings;
    public GetEventTeamsKeysResponse withGetEventTeamsKeys200ApplicationJsonStrings(String[] getEventTeamsKeys200ApplicationJSONStrings) {
        this.getEventTeamsKeys200ApplicationJSONStrings = getEventTeamsKeys200ApplicationJSONStrings;
        return this;
    }
}