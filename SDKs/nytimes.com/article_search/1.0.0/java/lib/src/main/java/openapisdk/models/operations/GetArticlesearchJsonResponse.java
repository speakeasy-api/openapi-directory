package openapisdk.models.operations;



public class GetArticlesearchJsonResponse {
    public String contentType;
    public GetArticlesearchJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetArticlesearchJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetArticlesearchJson200ApplicationJson getArticlesearchJSON200ApplicationJSONObject;
    public GetArticlesearchJsonResponse withGetArticlesearchJson200ApplicationJsonObject(GetArticlesearchJson200ApplicationJson getArticlesearchJSON200ApplicationJSONObject) {
        this.getArticlesearchJSON200ApplicationJSONObject = getArticlesearchJSON200ApplicationJSONObject;
        return this;
    }
}