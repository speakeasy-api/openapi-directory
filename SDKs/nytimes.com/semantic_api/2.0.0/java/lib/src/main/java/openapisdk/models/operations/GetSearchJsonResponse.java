package openapisdk.models.operations;



public class GetSearchJsonResponse {
    public String contentType;
    public GetSearchJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSearchJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSearchJson200ApplicationJson getSearchJSON200ApplicationJSONObject;
    public GetSearchJsonResponse withGetSearchJson200ApplicationJsonObject(GetSearchJson200ApplicationJson getSearchJSON200ApplicationJSONObject) {
        this.getSearchJSON200ApplicationJSONObject = getSearchJSON200ApplicationJSONObject;
        return this;
    }
}