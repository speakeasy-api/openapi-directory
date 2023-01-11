package openapisdk.models.operations;



public class ListDirectivesResponse {
    public String contentType;
    public ListDirectivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListDirectivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDirectives200ApplicationJson listDirectives200ApplicationJSONObject;
    public ListDirectivesResponse withListDirectives200ApplicationJsonObject(ListDirectives200ApplicationJson listDirectives200ApplicationJSONObject) {
        this.listDirectives200ApplicationJSONObject = listDirectives200ApplicationJSONObject;
        return this;
    }
}