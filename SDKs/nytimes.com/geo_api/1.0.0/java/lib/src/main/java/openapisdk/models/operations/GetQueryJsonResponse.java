package openapisdk.models.operations;



public class GetQueryJsonResponse {
    public String contentType;
    public GetQueryJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetQueryJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetQueryJson200ApplicationJson getQueryJSON200ApplicationJSONObject;
    public GetQueryJsonResponse withGetQueryJson200ApplicationJsonObject(GetQueryJson200ApplicationJson getQueryJSON200ApplicationJSONObject) {
        this.getQueryJSON200ApplicationJSONObject = getQueryJSON200ApplicationJSONObject;
        return this;
    }
}