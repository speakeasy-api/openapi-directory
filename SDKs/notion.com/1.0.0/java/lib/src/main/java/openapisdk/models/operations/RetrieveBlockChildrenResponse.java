package openapisdk.models.operations;



public class RetrieveBlockChildrenResponse {
    public String contentType;
    public RetrieveBlockChildrenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RetrieveBlockChildrenResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RetrieveBlockChildrenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrieveBlockChildren200ApplicationJson retrieveBlockChildren200ApplicationJSONObject;
    public RetrieveBlockChildrenResponse withRetrieveBlockChildren200ApplicationJsonObject(RetrieveBlockChildren200ApplicationJson retrieveBlockChildren200ApplicationJSONObject) {
        this.retrieveBlockChildren200ApplicationJSONObject = retrieveBlockChildren200ApplicationJSONObject;
        return this;
    }
}