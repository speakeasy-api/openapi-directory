package openapisdk.models.operations;



public class RetrieveABlockResponse {
    public String contentType;
    public RetrieveABlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RetrieveABlockResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RetrieveABlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrieveABlock200ApplicationJson retrieveABlock200ApplicationJSONObject;
    public RetrieveABlockResponse withRetrieveABlock200ApplicationJsonObject(RetrieveABlock200ApplicationJson retrieveABlock200ApplicationJSONObject) {
        this.retrieveABlock200ApplicationJSONObject = retrieveABlock200ApplicationJSONObject;
        return this;
    }
}