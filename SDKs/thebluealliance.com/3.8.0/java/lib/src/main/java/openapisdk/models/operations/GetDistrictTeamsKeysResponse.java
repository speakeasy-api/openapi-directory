package openapisdk.models.operations;



public class GetDistrictTeamsKeysResponse {
    public String contentType;
    public GetDistrictTeamsKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictTeamsKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictTeamsKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getDistrictTeamsKeys200ApplicationJSONStrings;
    public GetDistrictTeamsKeysResponse withGetDistrictTeamsKeys200ApplicationJsonStrings(String[] getDistrictTeamsKeys200ApplicationJSONStrings) {
        this.getDistrictTeamsKeys200ApplicationJSONStrings = getDistrictTeamsKeys200ApplicationJSONStrings;
        return this;
    }
}