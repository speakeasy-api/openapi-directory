package openapisdk.models.operations;



public class GetBooksResponse {
    public String contentType;
    public GetBooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetBooks200ApplicationJson getBooks200ApplicationJSONObject;
    public GetBooksResponse withGetBooks200ApplicationJsonObject(GetBooks200ApplicationJson getBooks200ApplicationJSONObject) {
        this.getBooks200ApplicationJSONObject = getBooks200ApplicationJSONObject;
        return this;
    }
}