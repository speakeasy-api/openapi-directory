package openapisdk.models.operations;



public class GetEventMatchesKeysResponse {
    public String contentType;
    public GetEventMatchesKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventMatchesKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventMatchesKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getEventMatchesKeys200ApplicationJSONStrings;
    public GetEventMatchesKeysResponse withGetEventMatchesKeys200ApplicationJsonStrings(String[] getEventMatchesKeys200ApplicationJSONStrings) {
        this.getEventMatchesKeys200ApplicationJSONStrings = getEventMatchesKeys200ApplicationJSONStrings;
        return this;
    }
}