package openapisdk.models.operations;



public class GetTeamsKeysResponse {
    public String contentType;
    public GetTeamsKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamsKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamsKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getTeamsKeys200ApplicationJSONStrings;
    public GetTeamsKeysResponse withGetTeamsKeys200ApplicationJsonStrings(String[] getTeamsKeys200ApplicationJSONStrings) {
        this.getTeamsKeys200ApplicationJSONStrings = getTeamsKeys200ApplicationJSONStrings;
        return this;
    }
}