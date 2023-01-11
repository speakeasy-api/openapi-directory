package openapisdk.models.operations;



public class GetTeamEventMatchesKeysResponse {
    public String contentType;
    public GetTeamEventMatchesKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventMatchesKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventMatchesKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getTeamEventMatchesKeys200ApplicationJSONStrings;
    public GetTeamEventMatchesKeysResponse withGetTeamEventMatchesKeys200ApplicationJsonStrings(String[] getTeamEventMatchesKeys200ApplicationJSONStrings) {
        this.getTeamEventMatchesKeys200ApplicationJSONStrings = getTeamEventMatchesKeys200ApplicationJSONStrings;
        return this;
    }
}