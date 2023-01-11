package openapisdk.models.operations;



public class AppendBlockChildrenResponse {
    public String contentType;
    public AppendBlockChildrenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppendBlockChildrenResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppendBlockChildrenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppendBlockChildren200ApplicationJson appendBlockChildren200ApplicationJSONObject;
    public AppendBlockChildrenResponse withAppendBlockChildren200ApplicationJsonObject(AppendBlockChildren200ApplicationJson appendBlockChildren200ApplicationJSONObject) {
        this.appendBlockChildren200ApplicationJSONObject = appendBlockChildren200ApplicationJSONObject;
        return this;
    }
}